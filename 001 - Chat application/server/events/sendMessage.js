module.exports = function (app, socket) {
  return function (data) {
    console.log('sendMessage', data)

    if(data.message == "") return;

    console.log(socket.id);

    data = {
      room: data.room,
      message: {
        userid: '32dfUg5d',
        username: app.getUserFromSocketId(socket.id).username,
        message: data.message,
        timestamp: 1514775902
      }
    }

    app.io.emit('receiveMessage', data)
  }
}
