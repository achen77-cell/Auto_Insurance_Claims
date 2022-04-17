run the following commands \n
docker build -t html-server-image:v1 \n
docker run -d -p 80:80 html-server-image \n
curl localhost:80
