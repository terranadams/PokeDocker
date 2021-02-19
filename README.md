Cd into the docker project location and run the following
Deploy stack: docker stack deploy -c docker-compose.yaml pokeApp-stack
Scale out to 7: docker service scale pokeApp-stack_pokeApp1=7
Remove stack and containers: docker stack rm pokeApp-stack