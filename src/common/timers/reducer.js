import * as actions from './actions';
import * as authActions from '../auth/actions';
import Timer from './timer';
import { Record, Seq } from 'immutable';
import { updateList } from '../lib/redux-firebase';

const InitialState = Record({
  // Undefined is absence of evidence. Null is evidence of absence.
  list: undefined
});
const initialState = new InitialState;

const reviveList = list => list && Seq(list)
  .map(json => new Timer(json))
  .toList();

const revive = ({ list }) => initialState.merge({
  list: reviveList(list)
});

export default function timersReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ON_TIMERS_LIST: {
      const { list } = action.payload;
      return state.set('list', reviveList(list));
    }

    case actions.START_TIMER: {
      const { timer } = action.payload;
      const index = state.list.indexOf(timer);
      return state.set('list', state.list.set(index, timer));
    }

    case actions.STOP_TIMER: {
      const { timer } = action.payload;
      const index = state.list.indexOf(timer);
      return state.set('list', state.list.set(index, timer));
    }

  }

  return state;
}
