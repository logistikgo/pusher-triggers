'use strict'

const Pusher = require('../config/pusher');
const PedidoDB = require('../bd/pedido');
const UsuarioDB = require('../bd/usuario');

async function triggerPedido(req, res) {
    let _idUsuario = req.body.idusuario;
    let _idPedido = req.body.idpedido;

    let currentPedido = await PedidoDB.get(_idPedido);
    let currentUsuario = await UsuarioDB.get(_idUsuario);

    let jsonResponse = {
        message: "update-evidencias",
        idPedido: _idPedido,
        delivery: currentPedido.Delivery,
        idcliente: currentPedido.IDClienteFiscal,
        usuario: {
            id: _idUsuario, nombre: currentUsuario.Nombre
        }
    }

    Pusher.channel.trigger('pedidos', 'update-evidencias', jsonResponse);
    res.status(200).send(`SUCCESS PUSHER PEDIDO`);
}

module.exports = {
    triggerPedido
}