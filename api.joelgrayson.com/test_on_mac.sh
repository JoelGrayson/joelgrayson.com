#!/bin/bash

# Usage: ./test_on_mac.sh for running the app
# ./test_on_mac.sh build for building the docker image

# Run `enable_all` and make sure docker daemon is running in the background


if [ "$1" == "build" ]; then
    docker build . -t api.joelgrayson.com-mac -f MacDockerFile
fi

sleep 1 && open http://localhost:8080 &
docker run -p 8080:8080 api.joelgrayson.com-mac

