module.exports = {
    port: process.env.PORT || 3000,

    //DEBUG
    appId: process.env.APPID_DEBUG,
    key: process.env.KEY_DEBUG,
    secret: process.env.SECRET_DEBUG,
    cluster: process.env.CLUSTER_DEBUG,
    //database: process.env.DATABASE_DEBUG,
    //userDB: process.env.USERDB_DEBUG,
    //passwordDB: process.env.PASSWORDDB_DEBUG,
    //serverDB: process.env.SERVERDB_DEBUG 

    //DEMO
    //appId: process.env.APPID_DEMO,
    //key: process.env.KEY_DEMO,
    //secret: process.env.SECRET_DEMO,
    //cluster: process.env.CLUSTER_DEMO,
    database: process.env.DATABASE_DEMO,
    userDB: process.env.USERDB_DEMO,
    passwordDB: process.env.PASSWORDDB_DEMO,
    serverDB: process.env.SERVERDB_DEMO

    //PRODUCTION
    //appId: process.env.APPID_PRODUCTION,
    //key: process.env.KEY_PRODUCTION,
    //secret: process.env.SECRET_PRODUCTION,
    //cluster: process.env.CLUSTER_PRODUCTION,
    //database: process.env.DATABASE_PRODUCTION,
    //userDB: process.env.USERDB_PRODUCTION,
    //passwordDB: process.env.PASSWORDDB_PRODUCTION,
    //serverDB: process.env.SERVERDB_PRODUCTION 
}