# Use Node 18 base image
FROM node:18

# Set working directory
WORKDIR /snailycad

# Install system dependencies (OpenSSL for Prisma)
RUN apt-get update -y && apt-get install -y openssl

# Copy all files into container
COPY . .

# Enable corepack and install pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# Install project dependencies
RUN pnpm install

# Build the project (includes all packages like @snailycad/ui)
RUN pnpm build

# Expose the port SnailyCAD runs on (adjust if different)
EXPOSE 3000

# Start the app in production mode
CMD ["pnpm", "start"]
