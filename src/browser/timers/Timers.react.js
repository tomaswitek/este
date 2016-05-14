import * as timersActions from '../../common/timers/actions';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import TimerItem from './TimerItem.react';
import loading from '../lib/loading';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { queryFirebase } from '../../common/lib/redux-firebase';

class Timers extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    limitToLast: PropTypes.number.isRequired,
    timers: PropTypes.object.isRequired
  };

  render() {
    const { limitToLast, timers } = this.props;

    return (
      <div className="firebase-timers">
        <ol>
          {timers.map(timer =>
            <TimerItem key={timer.id} timer={timer} />
          )}
        </ol>
      </div>
    );
  }

}

// Are you scared of many higher order components? Remember, these HOC's
// are just functions and can be composed ad-hoc later when patterns emerge :-)

Timers = loading(Timers, ['timers']);

Timers = queryFirebase(Timers, props => ({
  // Query path to listen. For one timer we can use `timers/${props.timer.id}`.
  path: 'timers',
  // Firebase imperative firebase.com/docs/web/api/query as declarative params.
  params: [
    ['orderByChild', 'authenticatedAt'],
    ['limitToLast', props.limitToLast]
  ],
  on: {
    // Value event always rerenders all timers. For better granularity, use
    // child_added, child_changed, child_removed, child_changed events.
    value: snapshot => props.onTimersList(snapshot.val())
  }
}));

Timers = injectIntl(Timers);

export default connect(state => ({
  timers: state.timers.list
}), timersActions)(Timers);
