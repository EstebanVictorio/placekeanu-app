# !/bin/bash

docker run --rm --name='kql-cache' --network="net" -p 6379:6379 kql-cache