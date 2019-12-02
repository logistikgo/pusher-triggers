const db = require('../config/db');
const sql = require('mssql');

async function get(idViaje) {
    try {
        console.log(idViaje);

        var _pool = await new sql.ConnectionPool(db.configDB).connect();

        var _result = await _pool.query`select * from xd_viajes where XD_IDViaje = ${idViaje}`;

        return _result.recordset[0];
    }
    catch (err) {
        console.log(err.message);
        throw err;
    }
}

module.exports = {
    get
}