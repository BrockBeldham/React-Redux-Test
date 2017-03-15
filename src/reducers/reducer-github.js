import { FETCH_GITHUB } from '../actions';

const INITIAL_STATE = { github: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GITHUB:
      return { ...state, github: action.payload.data };

    default:
      return state;
  }
}
