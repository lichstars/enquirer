FROM node:7.2.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependecies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app

# build and optimize react app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
