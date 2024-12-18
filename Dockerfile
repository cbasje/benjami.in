FROM denoland/deno:2.0.6
WORKDIR /app

COPY . .
RUN deno install
RUN deno task astro build
RUN deno cache dist/server/entry.mjs

USER deno
EXPOSE 3000

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "dist/server/entry.mjs"]