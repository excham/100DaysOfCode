var devData = require('../data.json')

module.exports = function (app, socket) {
  return function (data, callback) {
    app.addUser(socket.id, {
      username: data.username
    })
    callback(devData)
  }
};
