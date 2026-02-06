# Use an official Node image for building
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency manifests first (maximizes Docker layer cache)
COPY package.json package-lock.json* npm-shrinkwrap.json* ./

# Install dependencies (use loglevel=info so it prints progress in `docker build` logs)
RUN if [ -f package-lock.json ]; then \
    echo "package-lock.json found, running npm ci" && npm ci --no-audit --no-fund --progress --loglevel=info; \
  else \
    echo "no package-lock.json, running npm install" && npm install --no-audit --no-fund --progress --loglevel=info; \
  fi

# Copy build config + sources after deps are installed
COPY tsconfig.json tsup.config.ts vitest.config.ts README.md ./
COPY src ./src
COPY demo ./demo

# Build the project
RUN npm run build

# Runtime stage: serve the demo + built dist via nginx (no npm/network in runtime)
FROM nginx:1.27-alpine AS runtime

# demo/index.html imports '/dist/index.js'
COPY --from=builder /app/demo/ /usr/share/nginx/html/
COPY --from=builder /app/dist/ /usr/share/nginx/html/dist/

EXPOSE 80
