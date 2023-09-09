FROM node:18-alpine
RUN apt-get update && apt-get install -y git-all
RUN npm install -g yarn
RUN yarn set version stable
CMD ["git", "--version", "&&", "yarn", "--version"]
