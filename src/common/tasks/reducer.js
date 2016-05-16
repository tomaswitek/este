import * as actions from './actions';
import Task from './task';
import {List, Record} from 'immutable';

const InitialState = Record({
  list: List(),
  projectTasks: List()
});
const initialState = new InitialState;

const revive = ({list}) => initialState.merge({
  list: List(list).map(task => new Task(task))
});

export default function tasksReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.FETCH_TASKS_SUCCESS: {
      const tasks = List(action.payload).map(task => new Task(task));
      return state.update('list', list => list.merge(tasks));
    }

    case actions.FILTER_PROJECT_TASKS: {
      const { projectId } = action.payload;
      const projectTasks = state.list.filter(task => task.project_id === projectId);
      return state.setIn(['projectTasks'], projectTasks)
    }

  }

  return state;
}
