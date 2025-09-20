# Dockerfile
FROM node:18-slim AS base

WORKDIR /snailycad

# Install pnpm globally
RUN npm install -g pnpm

# Copy code
COPY . .

# Install dependencies
RUN pnpm install

# Build everything
RUN pnpm build

# Run production server (frontend + API together)
CMD ["pnpm", "start:prod"]
