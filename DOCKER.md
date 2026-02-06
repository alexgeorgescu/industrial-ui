# Docker build instructions

This project includes a multi-stage Dockerfile so you can build the library and run the demo inside containers (no local npm/node needed).

Quick commands:

- Build the runtime image (serves the demo via nginx):

```bash
docker build -t industrial-ui-demo .
```

- Build the builder stage image (contains the toolchain and `/app/dist`):

```bash
docker build --target builder -t industrial-ui-builder .
```

- Inspect the built artifacts inside a builder container:

```bash
docker run --rm -it industrial-ui-builder sh -c "ls -la /app/dist"
```

- Extract the `dist` folder to your host filesystem:

```bash
docker build --target builder -t industrial-ui-builder .
container=$(docker create industrial-ui-builder)
docker cp "$container":/app/dist ./dist
docker rm "$container"
```

Tip: You can also export the builder filesystem during build (Docker >= 18.09) and grab `dist/` from the output:

```bash
docker build --target builder --output type=local,dest=./out .
ls -la ./out/dist
```

This keeps your host machine free from global node installs and ensures builds run in a reproducible environment.

## Serve the demo

The runtime image serves the demo (from `demo/`) at `/` and the built library bundle (from `dist/`) at `/dist`.

```bash
docker build -t industrial-ui-demo .
docker run --rm -p 5000:80 industrial-ui-demo
```

Or run it detached:

```bash
docker run -d --name industrial-ui-demo --rm -p 5000:80 industrial-ui-demo
docker stop industrial-ui-demo
```

Open http://localhost:5000

If you're troubleshooting a slow or stuck dependency install, build with plain logs:

```bash
docker build --progress=plain -t industrial-ui-demo .
```
