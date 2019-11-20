const db = require('../config/db');
const sql = require('mssql');

async function get(idPedido) {
    try {
        var _pool = await new sql.ConnectionPool(config).connect()

        var _result = await _pool.query`select * from xd_pedidos where XD_IDPedido = ${idPedido}`;

        return _result.recordset[0];
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    get
}