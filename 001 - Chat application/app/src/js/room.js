const React = require('react');

class Room extends React.Component {

  constructor() {
    super()
  }

  checkChatSend(e) {
    if(e.which == 13)
      this.sendMessage()
  }

  sendMessage() {
    this.props.sendMessage(
      document.getElementById('chat__message_compose').value
    )
  }

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
            {className: 'chat-message', key: i},
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
        'small',
        {className: 'chat-typing'},
        React.createElement(
          'i',
          {},
          'Daniel'
        ),
        ' is typing...'
      ),
      React.createElement(
        'div',
        {className: 'columns'},
        React.createElement(
          'div',
          {className: 'column is-10'},
          React.createElement(
            'input',
            {className: 'input chat-compose', id: 'chat__message_compose', onKeyPress: this.checkChatSend.bind(this)}
          )
        ),
        React.createElement(
          'div',
          {className: 'column is-2'},
          React.createElement(
            'button',
            {className: 'button is-primary is-fullwidth', onClick: this.sendMessage.bind(this)},
            'Send'
          )
        )
      )
    )
  }
}

module.exports = Room;
