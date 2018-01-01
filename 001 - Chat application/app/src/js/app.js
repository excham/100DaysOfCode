const React = require('react');
const ReactDom = require('react-dom');
const ReactRouter = require('react-router-dom');

const history = require('history').createBrowserHistory

const Header = require(projectDir + 'template/header');
const Sidebar = require(projectDir + 'template/sidebar');

const Home = require(projectDir + 'home');
const Room = require(projectDir + 'room');
const AppManager = require(projectDir + 'appManager');

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      rooms: [
        {
          id: 'xe4gU37h',
          name: 'Apples',
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
          chatHistory: []
        },
        {
          id: '3fUe8Nts',
          name: 'Bananas',
          chatHistory: []
        }
      ]
    }
  }

  render() {
    return (
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
                {path: '/', component: Home, exact: true}
              ),
              this.state.rooms.map(function (e, i) {
                return React.createElement(
                  ReactRouter.Route,
                  {path: '/room/' + e.id, key: i, render: (routeProps) => {
                    return React.createElement(
                      Room,
                      {room: e}
                    )
                  }}
                )
              }),
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
