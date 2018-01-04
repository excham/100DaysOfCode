module.exports = function (app, socket) {
  // data: {room: XXX, isTyping: true|false}
  return function (data) {
    console.log(app.getUserFromSocketId(socket.id).username);
    app.io.emit('isTyping', {
      room: data.room,
      username: app.getUserFromSocketId(socket.id).username,
      isTyping: data.isTyping
    })
  }
}
