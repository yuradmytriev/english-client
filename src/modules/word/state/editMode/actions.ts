import { TOGGLE_EDIT_MODE, DISABLE_EDIT_MODE } from './types';

export const toggleEditModeAction = () => ({
  type: TOGGLE_EDIT_MODE,
});

export const disableEditModeAction = () => ({
  type: DISABLE_EDIT_MODE,
  editMode: false,
});
