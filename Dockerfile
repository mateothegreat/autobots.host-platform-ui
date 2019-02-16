FROM node AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html

COPY --from=builder /app/dist/k8exam-platform-ui /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
