import { combineReducers } from 'redux';
import { reduxFields } from '../lib/redux-fields';
import { routerReducer as routing } from 'react-router-redux';

import auth from '../auth/reducer';
import config from '../config/reducer';
import device from '../device/reducer';
import intl from '../intl/reducer';
import todos from '../todos/reducer';
import ui from '../ui/reducer';
import users from '../users/reducer';
import timers from '../timers/reducer';
import projects from '../projects/reducer';
import tasks from '../tasks/reducer';

export default combineReducers({
  auth,
  config,
  device,
  intl,
  reduxFields,
  routing,
  todos,
  ui,
  users,
  timers,
  projects,
  tasks
});
