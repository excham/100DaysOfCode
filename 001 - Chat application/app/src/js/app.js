const React = require('react');
const ReactDom = require('react-dom');
const ReactRouter = require('react-router-dom');

const io = require('socket.io-client')

const Header = require(projectDir + 'template/header');
const Sidebar = require(projectDir + 'template/sidebar');

const Login = require(projectDir + 'login');
const Home = require(projectDir + 'home');
const Room = require(projectDir + 'room');
const AppManager = require(projectDir + 'appManager');

class App extends React.Component {
  constructor() {
    super()

    this.socket = null;

    this.state = {
      loggedin: false,
      loginError: false,
      rooms: []
    }
  }

  getRoomIndex(id) {
    for (var i = 0; i < this.state.rooms.length; i++) {
      if(this.state.rooms[i].id == id)
        return i;
    }
    return null;
  }

  login(host, username, password) {

    this.socket = io(host || 'http://localhost:3000');

    this.socket.on('connect', function (data) {

      this.socket.emit('login', {username: username || 'Josh', password: password || 'Josh'}, function (data) {

        if(data.status == "success"){
          this.setState({rooms: data.rooms, loggedin: true})

          window.location.hash = "#/room/" + data.rooms[0].id

          this.socket.on('receiveMessage', this.receiveMessage.bind(this))
          this.socket.on('isTyping', this.isTyping.bind(this))
        }else{
          this.setState({loginError: true})
        }
      }.bind(this))
    }.bind(this));
  }

  receiveMessage(data) {
    console.log('receive', data);

    var rooms = this.state.rooms;
    rooms[this.getRoomIndex(data.room)].chatHistory.push(data.message)

    this.setState({rooms: rooms})
  }

  sendMessgae(room, message) {
    console.log('send', message, room);
    this.socket.emit('sendMessage', {
      room: room,
      message: message
    })
  }

  setTyping(room, isTyping) {
    this.socket.emit('setTyping', {
      room: room,
      isTyping: isTyping
    })
  }

  // For the record I hate this code
  isTyping(data) {
    var rooms = this.state.rooms;

    if(data.isTyping){
      if (!rooms[this.getRoomIndex(data.room)].typing.includes(data.username)) {
        rooms[this.getRoomIndex(data.room)].typing.push(data.username)
      }
    }else{
      rooms[this.getRoomIndex(data.room)].typing.splice(
        rooms[this.getRoomIndex(data.room)].typing.indexOf(data.username),
        1
      )
    }

    this.setState({rooms: rooms})
  }

  render() {
    return (
      !this.state.loggedin ?
      React.createElement(
        ReactRouter.HashRouter,
        {},
        React.createElement(
          'div',
          {className: 'app-container'},
          React.createElement(
            Header,
            {}
          ),
          React.createElement(
            Login,
            {login: this.login.bind(this), erred: this.state.loginError}
          )
        )
      ) :
      React.createElement(
        ReactRouter.HashRouter,
        {},
        React.createElement(
          'div',
          {className: 'app-container'},
          React.createElement(
            Header,
            {}
          ),
          React.createElement(
            Sidebar,
            {rooms: this.state.rooms}
          ),
          React.createElement(
            'div',
            {className: 'app-main'},
            React.createElement(
              ReactRouter.Switch,
              {},
              React.createElement(
                ReactRouter.Route,
                {path: '/', exact: true, component: Home}
              ),
              this.state.rooms.map(function (e, i) {
                return React.createElement(
                  ReactRouter.Route,
                  {path: '/room/' + e.id, key: i, render: (routeProps) => {
                    return React.createElement(
                      Room,
                      {room: e, sendMessage: this.sendMessgae.bind(this, e.id),
                        setTyping: this.setTyping.bind(this, e.id)}
                    )
                  }}
                )
              }.bind(this)),
              React.createElement(
                ReactRouter.Route,
                {path: '/app/:action', component: AppManager}
              )
            )
          )
        )
      )
    );
  }
}

module.exports = App;
