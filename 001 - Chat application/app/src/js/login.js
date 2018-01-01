const React = require('react');

class Login extends React.Component {

  login() {
    this.props.login();
  }

  render() {
    return React.createElement(
      'div',
      {className: 'columns is-centered'},
      React.createElement(
        'div',
        {className: 'column is-4 app-login'},
        React.createElement(
          'h2',
          {className: 'title is-3'},
          'Login'
        ),
        React.createElement(
          'div',
          {className: 'field'},
          React.createElement(
            'label',
            {className: 'label'},
            'Host'
          ),
          React.createElement(
            'input',
            {className: 'input'}
          )
        ),
        React.createElement(
          'div',
          {className: 'field'},
          React.createElement(
            'label',
            {className: 'label'},
            'Username'
          ),
          React.createElement(
            'input',
            {className: 'input'}
          )
        ),
        React.createElement(
          'div',
          {className: 'field'},
          React.createElement(
            'label',
            {className: 'label'},
            'Password'
          ),
          React.createElement(
            'input',
            {className: 'input', type: 'password'}
          )
        ),
        React.createElement(
          'div',
          {className: 'field'},
          React.createElement(
            'button',
            {className: 'button is-primary is-pulled-right', onClick: this.props.login},
            'Login'
          )
        )
      )
    );
  }
}

module.exports = Login;
