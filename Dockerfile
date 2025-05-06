# write to run index.js

FROM node:18
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 5388
CMD ["node", "index.js"]