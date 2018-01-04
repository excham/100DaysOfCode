module.exports = function (app) {
  return function (socket) {
    console.log('User connected: ' + socket.id)

    socket.on('login', require('./login')(app, socket))

    socket.on('sendMessage', require('./sendMessage')(app, socket))

    socket.on('setTyping', require('./setTyping')(app, socket))
    
  };
}
