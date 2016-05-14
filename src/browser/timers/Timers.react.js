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
    timers: PropTypes.object.isRequired
  };

  render() {
    const { timers } = this.props;

    return (
      <div className="firebase-timers">
        <ul>
          {timers.map(timer =>
            <TimerItem key={timer.id} timer={timer} />
          )}
        </ul>
      </div>
    );
  }

}

Timers = loading(Timers, ['timers']);

Timers = queryFirebase(Timers, props => ({
  path: 'timers',
  on: {
    value: snapshot => props.onTimersList(snapshot.val())
  }
}));

Timers = injectIntl(Timers);

export default connect(state => ({
  timers: state.timers.list
}), timersActions)(Timers);
