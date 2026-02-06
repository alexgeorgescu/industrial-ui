#!/usr/bin/env bash
set -euo pipefail

IMAGE=industrial-ui-builder

docker build -t "$IMAGE" .

echo "Image built: $IMAGE"
echo "To extract artifacts run: container=$(docker create $IMAGE) && docker cp $container:/app/dist ./dist && docker rm $container"
