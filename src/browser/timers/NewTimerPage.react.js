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
import * as tasksActions from '../../common/tasks/actions';
import 'react-select/scss/default.scss';

class NewTimerPage extends Component {

  static propTypes = {
    intl: intlShape.isRequired,
    fields: PropTypes.object.isRequired,
    newTimer: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    fetchProjects: PropTypes.func.isRequired,
    fetchTasks: PropTypes.func.isRequired,
    filterProjectTasks: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onProjectChange = this.onProjectChange.bind(this);
    this.onTaskChange = this.onTaskChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { fields, newTimer, replace } = this.props;
    const values = fields.$values();
    newTimer(values);
    fields.$reset();
    replace('timers');
  }

  onProjectChange(project) {
    const { fields, tasks, filterProjectTasks } = this.props;
    fields.project_id.setValue(project);
    filterProjectTasks(fields.project_id.value.value);
  }

  onTaskChange(task){
    const { fields } = this.props;
    fields.task_id.setValue(task);
  }

  componentDidMount() {
    const { fetchProjects, fetchTasks } = this.props;
    fetchProjects();
    fetchTasks();
  }

  render() {
    const { intl, fields, projects, projectTasks } = this.props;
    const title = intl.formatMessage(linksMessages.timers);

    return (
      <div className="new-timer-page">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <Select
              {...fields.project_id}
              options={projects.toJS()}
              onChange={this.onProjectChange}
            />
          </div>
          <div>
            {!projectTasks.isEmpty() &&
              <Select
                {...fields.task_id}
                options={projectTasks.toJS()}
                onChange={this.onTaskChange}
              />
            }
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
  projects: state.projects.list,
  tasks: state.tasks.list,
  projectTasks: state.tasks.projectTasks
}), { ...projectsActions, ...timersActions, ...tasksActions, replace })(NewTimerPage);
