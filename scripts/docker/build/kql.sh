# !/bin/bash

docker image build --build-arg REDIS_HOST=172.26.0.2 --build-arg REDIS_PORT=6379 --build-arg REDIS_PASSWORD=81p3su28u18 -t kql apps/kql