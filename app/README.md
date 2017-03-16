# enquirer
Basic application with React front end web application & Sinatra on the server side


# Run Application on Docker 
```
cd app
docker build -t app .
docker run -p 3000:3000 app
```


# Run Server on Docker 
```
cd server
docker build -t server .
docker run -p 9292:9292 server
```