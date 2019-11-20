const db = require('../config/db');
const sql = require('mssql');

async function get(idUsuario) {
    try {
        var _pool = await new sql.ConnectionPool(config).connect();

        var _result = await _pool.query`select * from usuarios where IDUsuario = ${idUsuario}`;

        return _result.recordset[0];
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    get
}