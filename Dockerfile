# syntax=docker/dockerfile:1

# Build image
FROM node:24-alpine AS builder
WORKDIR /app

RUN npm install -g pnpm@12

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Production dependencies
FROM builder AS prod-deps
RUN pnpm prune --prod

# Production image
FROM node:24-alpine
WORKDIR /app

COPY --from=prod-deps --chown=node:node /app/dist dist/
COPY --from=prod-deps --chown=node:node /app/node_modules node_modules/
COPY --chown=node:node package.json ./

ENV PORT=3000
ENV NODE_ENV=production
# ENV ORIGIN=http://localhost:${PORT}

EXPOSE $PORT

USER node

CMD ["node", "dist/server/entry.mjs"]
