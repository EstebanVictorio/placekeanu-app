FROM node:18-alpine
RUN apk add git
RUN yarn set version stable
RUN corepack enable
WORKDIR /tmp/app
COPY ./ app
RUN touch app/yarn.lock
RUN cd app && yarn
RUN cd app && yarn compile
ENV REDIS_PASSWORD="81p3su28u18"
CMD ["/bin/sh", "-c", "cd app && yarn start"]