import './Login.scss';
import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import buttonsMessages from '../../common/app/buttonsMessages';
import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { firebaseActions, firebaseMessages } from '../../common/lib/redux-firebase';
import { replace } from 'react-router-redux';

const messages = defineMessages({
  socialLogin: {
    defaultMessage: 'Google Login',
    id: 'firebase.login.socialLogin'
  }
});

class FirebaseLogin extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    login: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onSocialLoginClick = this.onSocialLoginClick.bind(this);
  }

  async redirectOnSuccess(action) {
    const result = await action;
    if (result.error) return;
    const { location, replace } = this.props;
    const nextPathname = location.state && location.state.nextPathname || '/';
    replace(nextPathname);
  }

  onSocialLoginClick(e) {
    const { provider } = e.currentTarget.dataset;
    const { login } = this.props;
    this.redirectOnSuccess(login(provider));
  }

  render() {

    return (
      <div className="firebase-login">
        <div className="social-auth-providers">
          <button
            data-provider="google"
            onClick={this.onSocialLoginClick}
          >
            <FormattedMessage {...messages.socialLogin} />
          </button>
        </div>
      </div>
    );
  }

}

FirebaseLogin = injectIntl(FirebaseLogin);

export default connect(null, {...firebaseActions, replace})(FirebaseLogin);
