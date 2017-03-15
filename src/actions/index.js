import axios from 'axios';

export const FETCH_GITHUB = 'FETCH_GITHUB';

export function fetchGithub (username) {
  const request = axios.get(`https://api.github.com/users/${username}/starred`);

  return {
    type: FETCH_GITHUB,
    payload: request
  };
}
