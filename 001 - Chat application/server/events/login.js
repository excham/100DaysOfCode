const async = require('async');

const devData = require('../data.json')

module.exports = function (app, socket) {
  // data: {usernme: XXX, password: XXX}
  return function (data, callback) {
    if(data.username == data.password) {
      app.addUser(socket.id, {
        username: data.username
      })

      app.monk.get('rooms').find({}, function (err, docs) {

        var tasks = docs.map(function (room, i) {
          return function (callback) {
            app.monk.get('chatHistory').find({room: room.id}, function (err, docs) {
              callback(null, {
                id: room.id,
                name: room.name,
                unreadMessageCount: 0,
                chatHistory: docs
              })
            })
          }
        })

        async.parallel(tasks, function (err, results) {
          callback({
            status: 'success',
            rooms: results
          })
        });
      })
    }else{
      callback({status: 'failed'})
    }
  }
};
