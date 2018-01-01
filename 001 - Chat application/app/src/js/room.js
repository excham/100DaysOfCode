const React = require('react');

class Room extends React.Component {
  render() {
    return React.createElement(
      'div',
      {className: 'app-room'},
      React.createElement(
        'h1',
        {className: 'title is-2'},
        this.props.room.name
      ),
      React.createElement(
        'div',
        {className: 'chat-container'},
        this.props.room.chatHistory.map(function (e, i) {
          return React.createElement(
            'div',
            {className: 'chat-message'},
            React.createElement(
              'img',
              {src: 'src/images/avatar_1.png', className: 'chat-avatar'}
            ),
            React.createElement(
              'b',
              {className: 'chat-username'},
              e.username
            ),
            ' ',
            e.message
          );
        })
      ),
      React.createElement(
        'input',
        {className: 'input chat-compose'}
      )
    )
  }
}

module.exports = Room;
