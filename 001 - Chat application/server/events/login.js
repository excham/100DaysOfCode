var devData = require('../data.json')

module.exports = function (app, socket) {
  // data: {usernme: XXX, password: XXX}
  return function (data, callback) {
    if(data.username == data.password) {
      app.addUser(socket.id, {
        username: data.username
      })
      var data = devData
      data.status = 'success'
      callback(data)
    }else{
      callback({status: 'failed'})
    }
  }
};
