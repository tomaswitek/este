import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class TimerItem extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    const {
      user: { displayName, profileImageURL }
    } = this.props;
    return (
      <li>
        {displayName}
        <img
          src={profileImageURL}
        />
      </li>
    );
  }

}
