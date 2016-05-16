import * as actions from './actions';
import Project from './project';
import {List, Record} from 'immutable';

const InitialState = Record({
  list: List()
});
const initialState = new InitialState;

const revive = ({list}) => initialState.merge({
  list: List(list).map(project => new Project(project))
});

export default function projectReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.FETCH_PROJECTS_SUCCESS: {
      const projects = List(action.payload).map(project => new Project(project));
      return state.update('list', list => list.merge(projects));
    }

  }

  return state;
}
