const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(8082, () => {
    console.log('Listening on port 8082')
})

// Whenever we rebuild the app, we need to delete its container, make the image changes and rebuild it, and then create a new container.
// docker start (container name) (if container already exists)
// docker stop (container name)

// docker build -t (image name):latest .
// docker rm (container name)
// docker run -d --name (container name) -p 8080:8080 (image name):latest
                                    // first num = image host, second num = container

// to stop the swarm, run docker stack rm (stack name) 
// to view stacks, docker stack ls
// to remove orphaned images, run docker image prune, it'll delete anything that's not in use or has a tag of 'latest'