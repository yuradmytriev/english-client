import { TOGGLE_EDIT_MODE, DISABLE_EDIT_MODE } from './types';

export const editModeReducer = (editMode: boolean, { type, isEditMode }) => {
  switch (type) {
    case TOGGLE_EDIT_MODE:
      return !editMode;
    case DISABLE_EDIT_MODE:
      return isEditMode;
    default:
      return editMode;
  }
};
