const app = require('express')

app.listen(8080, () => {
    console.log('Listening on port 8081')
})

// Whenever we rebuild the app, we need to delete its container, make the image changes and rebuild it, and then create a new container.
// docker start (container name) (if container already exists)
// docker stop (container name)

// docker build -t (image name):latest .
// docker rm (container name)
// docker run -d --name (container name) -p 8080:8080 (image name):latest
                                    // first num = image host, second num = container