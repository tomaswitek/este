import Component from 'react-pure-render/component';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { fields } from '../../common/lib/redux-fields';
import { replace } from 'react-router-redux';
import Select from 'react-select';
import * as timersActions from '../../common/timers/actions';
import * as projectsActions from '../../common/projects/actions';
import 'react-select/scss/default.scss';

class NewTimerPage extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    fields: PropTypes.object.isRequired,
    newTimer: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { fields, newTimer, replace } = this.props;
    const values = fields.$values();
    newTimer(values);
    fields.$reset();
    replace('timers');
  }

  componentDidMount() {
    const { fetchProjects } = this.props;
    fetchProjects();
  }

  render() {
    const { intl, fields, projects } = this.props;
    const title = intl.formatMessage(linksMessages.timers);

    return (
      <div className="new-timer-page">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <Select
              {...fields.project_id}
              options={projects.toJS()}
            />

          </div>
          <div>
            <input
              {...fields.task_id}
              placeholder="Task"
            />
          </div>
          <div>
            <br/>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }

}

NewTimerPage = fields(NewTimerPage, {
  path: 'newTimer',
  fields: ['project_id', 'task_id']
});

NewTimerPage = injectIntl(NewTimerPage);

export default connect(state => ({
  projects: state.projects.list
}), { ...projectsActions, ...timersActions, replace })(NewTimerPage);
