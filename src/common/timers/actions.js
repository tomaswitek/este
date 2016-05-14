// Note prefix ON, it means the action is not dispatched by the viewer.
export const ON_TIMERS_LIST = 'ON_TIMERS_LIST';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';

export function onTimersList(list) {
  return {
    type: ON_TIMERS_LIST,
    payload: { list }
  };
}

export function startTimer(timer) {
  return {
    type: START_TIMER,
    payload: { timer }
  };
}

export function stopTimer(timer) {
  return {
    type: STOP_TIMER,
    payload: { timer }
  };
}
