// Note prefix ON, it means the action is not dispatched by the viewer.
export const ON_TIMERS_LIST = 'ON_TIMERS_LIST';

export function onTimersList(list) {
  return {
    type: ON_TIMERS_LIST,
    payload: { list }
  };
}
