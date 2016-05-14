import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';

export default class TimerItem extends Component {

  static propTypes = {
    timer: PropTypes.object.isRequired
  };

  render() {
    const {
      timer: { project_id, task_id }
    } = this.props;
    return (
      <li>
        {project_id} - {task_id}
      </li>
    );
  }

}
