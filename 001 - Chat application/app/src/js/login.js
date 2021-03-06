const React = require('react');

class Login extends React.Component {

  login() {
    this.props.login(
      document.getElementById('login__host').value,
      document.getElementById('login__username').value,
      document.getElementById('login__password').value
    );
  }

  render() {
    var loginErrorClass = this.props.erred == true ? " has-erred" : "";
    var loginErrorDisplay = this.props.erred == true ? "block" : "none";
    return React.createElement(
      'div',
      {className: 'columns is-centered'},
      React.createElement(
        'div',
        {className: 'column is-4 app-login' + loginErrorClass},
        React.createElement(
          'h2',
          {className: 'title is-3'},
          'Login'
        ),
        React.createElement(
          'div',
          {className: 'message is-danger', style: {display: loginErrorDisplay}},
          React.createElement(
            'div',
            {className: 'message-body has-text-centered'},
            'Incorrect username/password'
          )
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
            {className: 'input', id: 'login__host'}
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
            {className: 'input', id: 'login__username'}
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
            {className: 'input', type: 'password', id: 'login__password'}
          )
        ),
        React.createElement(
          'div',
          {className: 'field'},
          React.createElement(
            'button',
            {className: 'button is-primary is-pulled-right', onClick: this.login.bind(this)},
            'Login'
          )
        )
      )
    );
  }
}

module.exports = Login;
