import { TOGGLE_EDIT_MODE } from './types';

export const editModeReducer = (state, { type }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case TOGGLE_EDIT_MODE:
      return !state;
    default:
      return state;
  }
};
