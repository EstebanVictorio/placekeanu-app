FROM node:18-alpine
RUN apk add git
RUN yarn set version stable
RUN corepack enable
WORKDIR /tmp/app
COPY ./ app
RUN touch app/yarn.lock
RUN cd app && yarn
RUN cd app && yarn compile
CMD ["/bin/sh", "-c", "cd app && yarn start"]