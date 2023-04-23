# docker-mongo-cluster

**Introduction**

This is a repository for setting up a MongoDB sharding cluster using Docker Compose. It includes the following components:

- 3 Configuration Server (configdb)
- 3 Shards (shard1, shard2, shard3)
- 3 Router (mongos)


**Requirements**

- 3 server with enough storage for persist data
- docker 
- docker-compose



**How to run**

default username and password considered in this sample is root , 1234

please edit this sample password in /scripts files and run start.sh

./start.sh

run rhis script into the all server (just notice to comments)
