const config = require('./general');
const Pusher = require('pusher');

//PUSHER
var channel = new Pusher({
    appId: config.appId,
    key: config.key,
    secret: config.secret,
    cluster: config.cluster
});

module.exports = {
    channel
}