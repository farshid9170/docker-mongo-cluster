rs.initiate({_id: "rs-shard-01", version: 1, members: [ { _id: 0, host : "172.18.0.8:27017" } ] })
db.createUser( { user: "root", pwd: "1234", roles: ["root"] });
