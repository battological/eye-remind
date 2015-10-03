var Clock = React.createClass({
  getInitialState() {
    return ({
      clockTime: 20*60*100
    });
  },

  /**
   * Updates the clock with a countdown for a specified amount of time
   * @param time {number} - Initial clock time in milliseconds
   */
  countdown(time) {
    // Update clock if time differs from current state
    if (time != this.state.clockTime) {
      this.setState({ clockTime: time });
    }

    // Countdown the clock by 1 second
    setTimeout(function() {
      var curTime = this.state.clockTime;
      this.setState({ clockTime: curTime-1000 });

      // If the clock has reached zero, sound the alarm
      if (!this.state.clockTime) {
        this.soundAlarm();
      } else {  // Otherwise repeat
        this.countdown(this.state.clockTime);
      }
    }.bind(this), 1000);
  },

  soundAlarm() {
    alert('Alarm!');
  },

  render() {
    return(
      <div className="clock">
        <span>{this.state.clockTime}</span>
        <button onClick={this.countdown.bind(this, this.state.clockTime)}>Go</button>
      </div>
    );
  }
});

module.exports = Clock;
