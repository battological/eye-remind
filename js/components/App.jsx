var Clock = require('./Clock.jsx');

var App = React.createClass({
  render() {
    return (
    <div id="container">
      <Clock />
    </div>
    );
  }
});

module.exports = App;
