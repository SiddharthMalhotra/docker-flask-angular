Run the app using the command: docker-compose up

If facing any errors, kill any already exisiting containers using: docker rm -v $(docker ps --filter status=exited -q)

Clean build an application: docker-compose build --no-cache (Runs the DockerFiles from strach)

Force recreate docker application (Post clean build): docker-compose up --force-recreate (Not necessary as such)

For re-building the Angular app, in client folder: npm install , ng build, ng serve

Features:

- Card-based list of tickets
- Pagination after 25 tickets
- Pagination disabled when next_page= null
- Clickable cards: single ticket view
- Responsive


![](https://github.com/SiddharthMalhotra/docker-flask-angular/blob/master/zd.gif)
