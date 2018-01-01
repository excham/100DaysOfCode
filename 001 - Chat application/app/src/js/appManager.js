const React = require('react');
const remote = require('electron').remote;


class Home extends React.Component {
  componentDidMount() {
    remote.getCurrentWindow().close();
  }

  render() {
    return 'goodbye';
  }
}

module.exports = Home;
