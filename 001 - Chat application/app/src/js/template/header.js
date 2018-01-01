const React = require('react');
const ReactRouter = require('react-router-dom');

class Header extends React.Component {
  render() {
    return (
      React.createElement(
        'nav',
        {className: 'custom-navbar'},
        React.createElement(
          'span',
          {className: 'brand'},
          'Chat App'
        ),
        React.createElement(
          ReactRouter.Link,
          {to: '/app/close', tabIndex: 0},
          'x'
        )
      )
    );
  }
}

module.exports = Header;
