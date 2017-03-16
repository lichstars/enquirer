# Enquirer
Basic application that allows enquiries to be submitted via a form and shows all enquiries that have been saved. Built with React on the front end & Sinatra on the server side with a yaml storage database.


# Run Web Application on Docker 
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