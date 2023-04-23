#!/bin/bash
######please notice to comments#######

openssl rand -base64 346 > mongodb.key
chmod 600 mongodb.key
chown 999:999 mongodb.key

docker-compose up -d


######change in init-shard.js  the id  number and host for server 2&3#####################
docker-compose exec mongod01 sh -c "mongosh -port 27017 < /scripts/init-shard.js"


###############configserver scripts just need to run in server 1#############
docker-compose exec configsvr01 sh -c "mongosh -port 27018 < /scripts/init-configserver.js"


###############mongos scripts just need to run in server 1#############
docker-compose exec mongos01 sh -c "mongosh -port 27019 < /scripts/init-mongos.js"


docker-compose down

cp docker-composer.yml_auth docker-compose.yml

docker-compose up -d


