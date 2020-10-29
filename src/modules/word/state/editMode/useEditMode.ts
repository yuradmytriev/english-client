import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import { toggleEditModeAction, disableEditModeAction } from './actions';

export const useEditMode = () => {
  const dispatch = useDispatch();

  const isEditMode = useSelector((state: IState) => state.editMode);

  const toggleEditMode = (): void => {
    dispatch(toggleEditModeAction());
  };

  const disableEditMode = (): void => {
    dispatch(disableEditModeAction());
  };

  return { toggleEditMode, disableEditMode, isEditMode };
};
