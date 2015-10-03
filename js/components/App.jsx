var Clock = require('./Clock.jsx');

var App = React.createClass({
  render() {
    return (
    <div>
      <p>Click "Go" to start!</p>
      <Clock />
    </div>
    );
  }
});

module.exports = App;
