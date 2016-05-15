import Timer from './timer';
// Note prefix ON, it means the action is not dispatched by the viewer.
export const ON_TIMERS = 'ON_TIMERS';
export const SET_TIMER = 'SET_TIMER';
export const DELETE_TIMER = 'DELETE_TIMER';

export function onTimers(timers) {
  return {
    type: ON_TIMERS,
    payload: { timers }
  };
}

export function startTimer(timer) {
  // const map = timer.set('started_at', true);
  return ({ firebase }) => {
    timer = timer.set('started_at', firebase.constructor.ServerValue.TIMESTAMP);
    firebase.child('timers').child(timer.id).set(timer.toJS());
    return {
      type: SET_TIMER,
      payload: { timer }
    };
  };
}

export function stopTimer(timer) {
  return ({ firebase }) => {
    timer = timer.set('started_at', null);
    firebase.child('timers').child(timer.id).set(timer.toJS());
    return {
      type: SET_TIMER,
      payload: { timer }
    };
  };
}

export function addTimer(timer) {
  return ({ firebase, getUid }) => {
    const timer = new Timer({
      project_id: 1,
      task_id: 1,
      id: getUid(),
      created_at: firebase.constructor.ServerValue.TIMESTAMP
    });
    firebase.child('timers').child(timer.id).set(timer.toJS());
  };
}

export function deleteTimer(timer) {
  return ({ firebase }) => {
    firebase.child('timers').child(timer.id).remove();
    return {
      type: DELETE_TIMER,
      payload: { timer }
    };
  };
}
