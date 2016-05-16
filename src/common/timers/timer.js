import {Record} from 'immutable';

const Timer = Record({
  id: '',
  project_id: '',
  task_id: '',
  started_at: null,
  created_at: null,
  label: ''
});

export default class extends Timer {

  get isRunning() {
    return !!this.started_at;
  }

}
