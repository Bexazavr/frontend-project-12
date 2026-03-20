# projects/frontend-project-12/Dockerfile

FROM node:20-alpine AS builder

WORKDIR /app

# Copy only manifests first — enables install layer caching
COPY package.json package-lock.json ./
COPY frontend/package.json frontend/package-lock.json ./frontend/

# postinstall runs "cd frontend && npm ci" — works because frontend manifests are present
RUN npm ci

# Copy all source and build
COPY frontend/ ./frontend/
RUN npm run build

# --- Production stage ---
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/frontend/build ./frontend/build

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
