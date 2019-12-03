const db = require('../config/db');
const sql = require('mssql');

async function get(idPedido) {
    var result = await new sql.ConnectionPool(db.configDB).connect()
        .then(pool => {
            return pool.query`SELECT * FROM xd_pedidos WHERE XD_IDPedido = ${idPedido}`
        })
        .catch(err => {
            console.log(err.message);
            throw err;
        });

    return result.recordset[0];
}

module.exports = {
    get
}