export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
export const FETCH_TASKS_START = 'FETCH_TASKS_START';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FILTER_PROJECT_TASKS = 'FILTER_PROJECT_TASKS';

export function fetchTasks() {
  return ({fetch}) => ({
    type: FETCH_TASKS,
    payload: {
      promise: fetch('/api/v1/tasks')
        .then(response => response.json())
    }
  });
}

export function filterProjectTasks(projectId) {
  return ({fetch}) => ({
    type: FILTER_PROJECT_TASKS,
    payload: { projectId }
  });
}
