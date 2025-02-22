# Docker Compose for Node and Redis

A minimal example of Docker and Docker Compose that creates a custom Node and Redis image.

```bash
# Display output during build
BUILDKIT_PROGRESS=plain docker compose build web --no-cache
BUILDKIT_PROGRESS=plain docker compose build redis --no-cache

# Run services
docker compose up

# Push schema and seed DB
docker exec -it compose-node sh
npm run db:push
npm run db:seed
```
