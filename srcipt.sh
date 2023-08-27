#!/bin/bash
CONTAINER_NAME="deepak-rapidfort-assignment-container"
DOCKER_HUB_NAME="deepak258"
IMAGE_NAME="deepakrapidfort"

docker run -d -p 5050:5050 --name "$CONTAINER_NAME" "$DOCKER_HUB_NAME"/"$IMAGE_NAME"