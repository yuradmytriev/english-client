import { TOGGLE_EDIT_MODE } from './types';

export const editModeReducer = (editMode: boolean, { type }) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case TOGGLE_EDIT_MODE:
      return !editMode;
    default:
      return editMode;
  }
};
