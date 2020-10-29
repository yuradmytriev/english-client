import { useEffect } from 'react';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';

export const useDisableEditMode = () => {
  const { disableEditMode } = useEditMode();

  useEffect(
    () => () => {
      disableEditMode();
    },
    [],
  );
};
