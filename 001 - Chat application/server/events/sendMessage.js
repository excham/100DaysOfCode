module.exports = function (app, socket) {
  // data: {room: XXX, message: XXX}
  return function (data) {
    console.log('sendMessage', data)

    if(data.message == "") return;

    data = {
      room: data.room,
      message: {
        userid: '32dfUg5d',
        username: app.getUserFromSocketId(socket.id).username,
        message: data.message,
        timestamp: 1514775902
      }
    }

    messageRecord = data.message;
    messageRecord.room = data.room;

    app.monk.get('chatHistory').insert(messageRecord)

    app.io.emit('receiveMessage', data)
  }
}
