var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('User connected: ' + socket.id);

  socket.on('login', function (data) {
    console.log(data);
    socket.emit('loginResult', {
      rooms: [
        {
          id: 'xe4gU37h',
          name: 'Apples',
          unreadMessageCount: 2,
          chatHistory: [
            {
              userid: '32dfUg5d',
              username: 'Josh',
              message: 'Hey you guys awake?',
              timestamp: 1514775841
            },
            {
              userid: 'lEy5c925',
              username: 'Daniel',
              message: 'Yeah what\'s up?',
              timestamp: 1514775891
            },
            {
              userid: '32dfUg5d',
              username: 'Josh',
              message: 'bored lol',
              timestamp: 1514775902
            }
          ]
        },
        {
          id: 'l58SegYu',
          name: 'Oranges',
          unreadMessageCount: 0,
          chatHistory: []
        },
        {
          id: '3fUe8Nts',
          name: 'Bananas',
          unreadMessageCount: 0,
          chatHistory: []
        }
      ]
    });
  })

})

server.listen(3000, function () {
  console.log("Server started on port 3000");
});
