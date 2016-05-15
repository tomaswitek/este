import Timer from './timer';
// Note prefix ON, it means the action is not dispatched by the viewer.
export const ON_TIMERS = 'ON_TIMERS';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const NEW_TIMER = 'NEW_TIMER';
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

export function newTimer(values) {
  return ({ firebase, getUid }) => {
    const timer = new Timer({
      project_id: values.project_id,
      task_id: values.task_id,
      id: getUid(),
      created_at: firebase.constructor.ServerValue.TIMESTAMP
    });
    firebase.child('timers').child(timer.id).set(timer.toJS());
    return {
      type: NEW_TIMER,
      payload: { timer }
    };
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
