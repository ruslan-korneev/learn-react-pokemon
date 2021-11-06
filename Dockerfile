# pull official base image
FROM node:14.18.1-alpine

# set work directory
WORKDIR /app/

# add to $PATH
ENV PATH="./node_modules/.bin:$PATH"

# add app
COPY . /app/
COPY package.json ./

# build app
RUN npm run build

# start app
CMD [ "npm", "start" ]
