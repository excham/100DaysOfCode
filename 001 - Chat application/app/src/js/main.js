window.projectDir = __dirname + '/src/js/'

const React = require('react');
const ReactDom = require('react-dom');

const App = require(projectDir + 'app');

ReactDom.render(
  React.createElement(
    App
  ),
  document.getElementById('app')
)
