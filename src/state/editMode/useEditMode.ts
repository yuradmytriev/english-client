import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'interfaces/IState';
import { toggleEditModeAction } from './actions';

export const useEditMode = () => {
  const dispatch = useDispatch();

  const isEditMode = useSelector((state: IState) => state.editMode);

  const toggleEditMode = (): void => {
    dispatch(toggleEditModeAction());
  };

  return { toggleEditMode, isEditMode };
};
