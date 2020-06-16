import { useDispatch, useSelector } from 'react-redux';
import { toggleEditModeAction } from './actions';

export const useEditMode = () => {
  const dispatch = useDispatch();

  const isEditMode = useSelector((state: any) => state.editMode);

  const toggleEditMode = (): void => {
    dispatch(toggleEditModeAction());
  };

  return { toggleEditMode, isEditMode };
};
