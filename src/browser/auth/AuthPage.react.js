import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import FirebaseLogin from './FirebaseLogin.react';
import React from 'react';
import linksMessages from '../../common/app/linksMessages';
import { injectIntl, intlShape } from 'react-intl';
import { locationShape } from 'react-router';

class AuthPage extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    location: locationShape
  };

  render() {
    const { intl, location } = this.props;
    const title = intl.formatMessage(linksMessages.login);
    return (
      <div className="auth-page">
        <Helmet title={title} />
        <FirebaseLogin location={location} />
      </div>
    );
  }

}

export default injectIntl(AuthPage);
