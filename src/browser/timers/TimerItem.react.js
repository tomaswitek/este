import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object.isRequired
  };

  render() {
    const {
      timer: { displayName, profileImageURL }
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
