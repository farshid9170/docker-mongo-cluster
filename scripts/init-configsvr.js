rs.initiate({_id: "rs-config-server", configsvr: true, version: 1, members: [ { _id: 0, host : '172.18.0.5:27018' } ] })
db.createUser( { user: "root", pwd: "1234", roles: ["root"] });
