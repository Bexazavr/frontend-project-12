# projects/frontend-project-12/Dockerfile

FROM node:20-alpine AS builder

WORKDIR /app

# Copy frontend source first — postinstall needs it to run npm ci inside frontend/
COPY frontend/ ./frontend/

# Install root deps — postinstall runs "cd frontend && npm ci" automatically
COPY package.json package-lock.json ./
RUN npm ci

# Build React frontend
RUN npm run build

# --- Production stage ---
FROM node:20-alpine

WORKDIR /app

# Install only production deps (chat server)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy built frontend
COPY --from=builder /app/frontend/build ./frontend/build

# PORT env var is read by @hexlet/chat-server (default 5001)
ENV PORT=3000
EXPOSE 3000

CMD ["npx", "start-server", "-s", "./frontend/build"]
