const app = require('./app');
const config = require('./config/general');

app.get('/', (req, res) => {
	res.send(`API PUSHER-XD VERSIÓN:${process.env.npm_package_version}`);
});

const server = app.listen(config.port, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});