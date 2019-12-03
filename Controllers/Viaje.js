'use strict'

const Pusher = require('../config/pusher');
const ViajeDB = require('../bd/viaje');
const UsuarioDB = require('../bd/usuario');

async function triggerViaje(req, res) {
	let _idUsuario = req.body.idusuario;
	let _idViaje = req.body.idviaje;

	try {
		let currentViaje = await ViajeDB.get(_idViaje);
		let currentUsuario = await UsuarioDB.get(_idUsuario);

		let jsonResponse = {
			message: "update-status",
			idviaje: _idViaje,
			folio: currentViaje.Folio,
			estatus: currentViaje.Status,
			usuario: {
				id: _idUsuario, nombre: currentUsuario.Nombre
			}
		}

		Pusher.channel.trigger('viajes', 'update-status', jsonResponse);
		res.status(200).send(`SUCCESS PUSHER VIAJE`);
	} 
	catch (err) {
		console.log(err);
		res.status(500).send({ message: err.message });
	}
}

module.exports = {
	triggerViaje
}