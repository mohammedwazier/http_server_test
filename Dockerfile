# write to run index.js with pnpm

FROM node:18
WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install
# COPY package.json .
# COPY package-lock.json .
RUN pnpm install
COPY . .
EXPOSE 5388
CMD ["node", "index.js"]