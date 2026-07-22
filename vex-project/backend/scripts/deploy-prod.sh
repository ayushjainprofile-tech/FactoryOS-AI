#!/bin/bash
set -e
echo "Deploying containerized services to Production environment..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
echo "Production environment deployment successfully completed."
