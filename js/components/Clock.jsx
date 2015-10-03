var Clock = React.createClass({
  getInitialState() {
    return ({
      clockTime: 20*60*1000,  // 20 minutes * 60 seconds * 1000 milliseconds
      clock: '20:00',
      lookAway: 'Time for an eye break!'
    });
  },

  /**
   * Updates the clock with a countdown for a specified amount of time
   * @param time {number} - Initial clock time in milliseconds
   * @param text {string} - The text of the alert to appear at the end of the countdown
   */
  countdown(time, text) {
    // Update clock if time differs from current state
    if (time != this.state.clockTime) {
      this.setState({ 
        clockTime: time,
	clock: this.formatMilliseconds(time)
      });
    }

    // Countdown the clock by 1 second
    setTimeout(function() {
      var curTime = this.state.clockTime;
      var newTime = curTime-1000;
      this.setState({ 
        clockTime: newTime,
	clock: this.formatMilliseconds(newTime)
      });

      // If the clock has reached zero, sound the alarm
      if (!this.state.clockTime) {
        this.soundAlarm(text);
      } else {  // Otherwise repeat
        this.countdown(this.state.clockTime, text);
      }
    }.bind(this), 1000);
  },

  /**
   * Alerts the user to something
   * @param {string} text - The text of the alert
   */
  soundAlarm(text) {
    var alarm = new Audio('public/audio/alert.wav');
    alarm.play();
    alert(text);
  },

  /**
   * Convert milliseconds into a clock
   * @params {number} ms - Number of milliseconds
   * @return {string} - The formatted clock
   */
  formatMilliseconds(ms) {
    var d = new Date(ms);
    return d.getMinutes()+':'+d.getSeconds();
  },

  render() {
    return(
      <div className="clock">
        <span className="clock">
	  {this.state.clock}
	</span>
        <button 
	  className="start-clock" 
	  onClick={this.countdown.bind(this, this.state.clockTime, this.state.lookAway)}>
	  Go
	</button>
      </div>
    );
  }
});

module.exports = Clock;
