FROM node
  
RUN npm install -g gatsby-cli

# The port gatsby runs on
EXPOSE 8000

WORKDIR /myapp

COPY ./front-end/package.json /myapp

COPY . /myapp
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]
