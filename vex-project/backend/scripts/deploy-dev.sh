#!/bin/bash
set -e
echo "Deploying containerized services to Dev environment..."
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build
echo "Dev environment deployment successfully completed."
