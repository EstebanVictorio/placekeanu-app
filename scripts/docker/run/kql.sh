# !/bin/bash

docker run --rm --name='kql' --env API_URL=https://placekeanu.com --env REDIS_HOST=172.26.0.2 --network="net" -p 8000:8000 --privileged kql