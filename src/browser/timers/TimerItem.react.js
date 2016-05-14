import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onStartClick = this.onStartClick.bind(this);
    this.onStopClick = this.onStopClick.bind(this);
  }

  onStartClick() {
    const { timer, startTimer } = this.props;
    startTimer(timer);
  }

  onStopClick() {
    const { timer, stopTimer } = this.props;
    stopTimer(timer);
  }

  render() {
    const { timer } = this.props;

    let buttonAction, buttonMessage;

    if (timer.isRunning) {
      buttonAction = this.onStopClick;
      buttonMessage = 'Stop';
    } else {
      buttonAction = this.onStartClick;
      buttonMessage = 'Start';
    }

    return (
      <li>
        <span>{timer.label}</span>
        <span
          className="button"
          onClick={buttonAction}
        >{buttonMessage}</span>
      </li>
    );
  }

}
