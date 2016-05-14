import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { injectIntl, intlShape } from 'react-intl';
import Users from './Users.react';

class TimersPage extends Component {

  static propTypes = {
    intl: intlShape.isRequired
  };

  render() {
    const { intl } = this.props;
    const title = intl.formatMessage(linksMessages.timers);

    return (
      <div className="timers-page">
        <Users limitToLast={10} />
      </div>
    );
  }

}

export default injectIntl(TimersPage);
