rs.initiate({_id: "rs-config-server", configsvr: true, version: 1, members: [ { _id: 0, host : 'configsvr01:27018' } ] })
rs.initiate({_id: "rs-config-server", configsvr: true, version: 1, members: [ { _id: 1, host : 'configsvr02:27018' } ] })
rs.initiate({_id: "rs-config-server", configsvr: true, version: 1, members: [ { _id: 2, host : 'configsvr03:27018' } ] })
db.createUser( { user: "root", pwd: "1234", roles: ["root"] });
