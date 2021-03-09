FROM circleci/node:latest-browsers as builder

ARG REACT_ENV

WORKDIR /usr/src/app/

USER root

COPY package.json ./

RUN npm install

COPY ./ ./

# RUN npm run test:all

# RUN npm run fetch:blocks

RUN npm run build-$REACT_ENV

FROM nginx

WORKDIR /usr/share/nginx/html/

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
