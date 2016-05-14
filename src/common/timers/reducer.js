import * as actions from './actions';
import * as authActions from '../auth/actions';
import Timer from './timer';
import { Record, Seq } from 'immutable';

const InitialState = Record({
  // Undefined is absence of evidence. Null is evidence of absence.
  list: undefined,
  viewer: undefined
});
const initialState = new InitialState;

const reviveList = list => list && Seq(list)
  .map(json => new Timer(json))
  .sortBy(timer => -timer.authenticatedAt)
  .toList();

const revive = ({ list, viewer }) => initialState.merge({
  list: reviveList(list),
  viewer: viewer ? new Timer(viewer) : null
});

export default function timersReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ON_TIMERS_LIST: {
      const { list } = action.payload;
      return state.set('list', reviveList(list));
    }

  }

  return state;
}
