module.exports = function (app, socket) {
  // data: {room: XXX, isTyping: true|false}
  return function (data) {
    app.io.emit('isTyping', {
      room: data.room,
      username: app.getUserFromSocketId(socket.id).username,
      isTyping: data.isTyping
    })
  }
}
