# unschooled

Documentation: https://docs.google.com/document/d/1zX0L4puJzKujGLVtWGxeKu8JXcTygIPxIIZTG7EC0wg/edit?usp=sharing

## Run it

```bash
# From the /server directory
$ DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/gotutorial?sslmode=disable go run main.go
# From the /client directory
$ npm start
```

## Deploying to Heroku

```bash
# Add and commit all of our changes, then push.
$ git add . 
$ git commit -m '...'
$ git push

# In a new terminal tail the container logs
$ heroku logs --tail
```
## Docker build

```bash
$ docker build -t golang-heroku .
$ docker run -p 3000:8080 -d golang-heroku
```

