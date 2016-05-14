import {Record} from 'immutable';

const Timer = Record({
  id: '',
  project_id: '',
  task_id: '',
  authenticatedAt: null,
  displayName: '',
  email: '',
  // id: '',
  profileImageURL: '',
  provider: ''
});

export default Timer;
