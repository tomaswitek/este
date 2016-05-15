import * as timersActions from '../../common/timers/actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import Timer from './Timer.react';
import loading from '../lib/loading';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { queryFirebase } from '../../common/lib/redux-firebase';

class Timers extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    timers: PropTypes.object.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
  };

  render() {
    const { timers, startTimer, stopTimer } = this.props;

    return (
      <div className="firebase-timers">
        <ul>
          {timers.toList().sortBy(item => item.created_at).map(timer =>
            <Timer key={timer.id} timer={timer} />
          )}
        </ul>
      </div>
    );
  }

}

Timers = loading(Timers, ['timers']);

Timers = queryFirebase(Timers, props => ({
  path: 'timers',
  params: [
    ['orderByChild', 'created_at']
  ],
  on: {
    value: snapshot => props.onTimers(snapshot.val())
  }
}));

Timers = injectIntl(Timers);

export default connect(state => ({
  timers: state.timers.map
}), timersActions)(Timers);
