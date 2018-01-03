const React = require('react');
const ReactRouter = require('react-router-dom');

class Sidebar extends React.Component {
  render() {
    return (
      React.createElement(
        'div',
        {className: 'sidebar'},
        this.props.rooms.map(function (e, i) {
          return React.createElement(
            ReactRouter.Link,
            {className: 'icon', to: '/room/' + e.id, key: i},
            ' ',
            e.unreadMessageCount != 0 ? React.createElement(
              'span',
              {className: 'icon-notification-count'},
              e.unreadMessageCount
            ) : null
          );
        }),
        React.createElement(
          ReactRouter.Link,
          {className: 'icon settings', to: '/settings'},
          React.createElement(
            'i',
            {className: 'fa fa-cog'},
            ' '
          )
        )
      )
    );
  }
}

module.exports = Sidebar;
