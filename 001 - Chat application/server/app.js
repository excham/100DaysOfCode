
class App {
  constructor() {
    this.server = require('http').createServer()
    this.monk = require('monk')('localhost/chat')

    this.store = require('store')

    this.io = require('socket.io')(this.server)

    this.io.on('connection', require('./events')(this))

    this.server.listen(3000, function () {
      console.log("Server started on port 3000")
    });
  }

  addUser(socketId, user){
    this.store.set('user_s-' + socketId, user)
  }

  getUserFromSocketId(socketId){
    if(this.store.get('user_s-' + socketId)){
      return this.store.get('user_s-' + socketId);
    }
  }
}

module.exports = App
