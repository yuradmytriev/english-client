import { useState } from 'react';

export const useToggleModal = () => {
  const [visible, toggleVisible] = useState<boolean>(false);

  const openModal = (): void => toggleVisible(true);
  const closeModal = (): void => toggleVisible(false);

  return { visible, openModal, closeModal, toggleVisible };
};
