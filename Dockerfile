#define the latest nodejs image  to build from
FROM node:latest
#create a working directory
RUN mkdir -p /usr/src/prdMiddleware
WORKDIR /usr/src/prdMiddleware
#copy package.json and package-lock.json files under the working directory 
COPY package.json /usr/src/prdMiddleware/
COPY package-lock.json /usr/src/prdMiddleware/
# install all the dependencies 
RUN npm install
#copy all your files under the working directory
COPY . /usr/src/prdMiddleware
#expose the port 4000
EXPOSE 4000
#start nodejs server 
CMD npm start
