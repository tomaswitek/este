import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { injectIntl, intlShape } from 'react-intl';
import Timers from './Timers.react';
import { connect } from 'react-redux';
import * as timersActions from '../../common/timers/actions';
import { Link } from 'react-router';

class TimersPage extends Component {

  static propTypes = {
    intl: intlShape.isRequired
  };

  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    const { addTimer } = this.props;
    addTimer();
  }

  render() {
    const { intl } = this.props;
    const title = intl.formatMessage(linksMessages.timers);

    return (
      <div className="timers-page">
        <Timers/>
        <Link activeClassName="active" to="/new-timer">
          New Timer
        </Link>
      </div>
    );
  }

}

TimersPage = injectIntl(TimersPage);

export default connect(state => state, timersActions)(TimersPage);
