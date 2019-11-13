const sql = require('mssql');

var configDB = {
    user: 'QUR3n5qk4F33',
    password: 'B33vdHtRR7su8B3T72',
    server: 'logistikgo.database.windows.net', 
    database: 'LogistikGO_XD_Copiar_01',
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