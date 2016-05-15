import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import { queryFirebase } from '../../common/lib/redux-firebase';
import { connect } from 'react-redux';
import * as timersActions from '../../common/timers/actions';

export default class Timer extends Component {

  static propTypes = {
    timer: PropTypes.object.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    deleteTimer: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onStartClick = this.onStartClick.bind(this);
    this.onStopClick = this.onStopClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onStartClick() {
    const { timer, startTimer } = this.props;
    startTimer(timer);
  }

  onStopClick() {
    const { timer, stopTimer } = this.props;
    stopTimer(timer);
  }

  onDeleteClick() {
    const { timer, deleteTimer } = this.props;
    deleteTimer(timer);
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
        <button onClick={buttonAction}>{buttonMessage}</button>
        <button onClick={this.onDeleteClick}>Delete</button>
      </li>
    );
  }

}

export default connect(state => state, timersActions)(Timer);
