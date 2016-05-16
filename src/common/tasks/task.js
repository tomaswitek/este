import {Record} from 'immutable';

const Task = Record({
  id: '',
  project_id: '',
  name: ''
});

export default class extends Task {

  get value() {
    return this.id;
  }

  get label() {
    return this.name;
  }

  toJS() {
    return {
      label: this.label,
      value: this.value
    };
  }

}
