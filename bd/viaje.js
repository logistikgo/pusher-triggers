const db = require('../config/db');
const sql = require('mssql');

async function get(idViaje) {
    var result = await new sql.ConnectionPool(db.configDB).connect()
        .then(pool => {
            return pool.query`SELECT * FROM xd_viajes WHERE XD_IDViaje = ${idViaje}`
        })
        .catch(err => {
            console.log(err.message);
            throw err;
        });

    return result;
}

module.exports = {
    get
}