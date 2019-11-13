

async function getPedido (idPedido) {
	try {

       	var _pool = await new sql.ConnectionPool(config).connect()

       	var _result = await _pool.query`select * from xd_pedidos where XD_IDPedido = ${idPedido}`;

        return _result.recordset[0];

   
    } catch (err) {
    	console.log(err);      
        // ... error checks
    }
}