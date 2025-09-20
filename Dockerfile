# Use Node 18 base image
FROM node:18

# Set working directory
WORKDIR /snailycad

# Install system dependencies (fix for Prisma + OpenSSL)
RUN apt-get update -y && apt-get install -y openssl

# Copy all files
COPY . .

# Enable corepack and install pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# Install dependencies
RUN pnpm install

# Build the app (includes frontend and backend)
RUN pnpm build

# Expose the app port (SnailyCAD default is 3000)
EXPOSE 3000

# Run the app in production
CMD ["pnpm", "start"]
