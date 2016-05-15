import * as actions from './actions';
import * as authActions from '../auth/actions';
import Timer from './timer';
import { Record, Seq, Map } from 'immutable';
import { updateList } from '../lib/redux-firebase';

const InitialState = Record({
  map: Map()
});
const initialState = new InitialState;

const timerJsonToTimer = json => json && new Timer(json);
const timersJsonToMap = json => Seq(json).map(timerJsonToTimer).toMap();

const revive = state => initialState.merge({
  map: timersJsonToMap(state.map)
});

export default function timersReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ON_TIMERS: {
      const { timers } = action.payload;
      return state.setIn(['map'], timersJsonToMap(timers))
    }

    case actions.SET_TIMER: {
      const { timer } = action.payload;
      return state.setIn(['map', timer.id], timer);
    }

    case actions.DELETE_TIMER: {
      const { timer } = action.payload;
      return state.deleteIn(['map', timer.id]);
    }

  }

  return state;
}
