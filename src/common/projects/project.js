import {Record} from 'immutable';

const Project = Record({
  id: '',
  shortname: '',
  description: ''
});

export default Project;

export default class extends Project {

  get value() {
    return this.id;
  }

  get label() {
    return [this.shortname, this.description].join(' - ');
  }

  toJS() {
    return {
      label: this.label,
      value: this.value
    };
  }

}
