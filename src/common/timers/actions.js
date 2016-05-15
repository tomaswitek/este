import Timer from './timer';
// Note prefix ON, it means the action is not dispatched by the viewer.
export const ON_TIMERS_LIST = 'ON_TIMERS_LIST';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const ON_TIMER = 'ON_TIMER';

export function onTimersList(list) {
  return {
    type: ON_TIMERS_LIST,
    payload: { list }
  };
}

export function startTimer(timer) {
  // const map = timer.set('started_at', true);
  return ({ firebase }) => {
    timer = timer.set('started_at', firebase.constructor.ServerValue.TIMESTAMP);
    firebase.child('timers').child(timer.id).set(timer.toJS());
    return {
      type: START_TIMER,
      payload: { timer }
    };
  };
}

export function stopTimer(timer) {
  return ({ firebase }) => {
    timer = timer.set('started_at', null);
    firebase.child('timers').child(timer.id).set(timer.toJS());
    return {
      type: STOP_TIMER,
      payload: { timer }
    };
  };
}

export function addTimer(timer) {
  return ({ firebase, getUid }) => {
    const timer = new Timer({
      project_id: 1,
      task_id: 1,
      id: getUid()
    });
    firebase.child('timers').child(timer.id).set(timer.toJS());
  };
}
