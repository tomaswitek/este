export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR';
export const FETCH_PROJECTS_START = 'FETCH_PROJECTS_START';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';

export function fetchProjects() {
  return ({fetch}) => ({
    type: FETCH_PROJECTS,
    payload: {
      promise: fetch('/api/v1/projects')
        .then(response => response.json())
    }
  });
}
