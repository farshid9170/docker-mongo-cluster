sh.addShard( "rs-shard-01/mongod01:27017")
sh.addShard( "rs-shard-01/mongod02:27017")
sh.addShard( "rs-shard-01/mongod03:27017")



use test
sh.enableSharding("test")
sh.shardCollection("test.connection_log", {"user_id":"hashed"})
