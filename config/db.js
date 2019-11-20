const config = require("./general");

var configDB = {
    user: config.userDB,
    password: config.passwordDB,
    server: config.serverDB,
    database: config.database,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

module.exports = {
    configDB
}; 