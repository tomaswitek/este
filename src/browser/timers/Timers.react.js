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
    timers: PropTypes.object.isRequired
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

Timers = queryFirebase(Timers, ({onTimers, viewer}) => ({
  path: 'timers',
  params: [
    ['orderByChild', 'creator_id'],
    ['equalTo', viewer.id]
  ],
  on: {
    value: snapshot => onTimers(snapshot.val())
  }
}));

Timers = injectIntl(Timers);

export default connect(state => ({
  timers: state.timers.map,
  viewer: state.users.viewer
}), timersActions)(Timers);
