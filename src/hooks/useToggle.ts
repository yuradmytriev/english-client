import { useState } from 'react';

export const useToggle = () => {
  const [visible, toggleVisible] = useState<boolean>(false);

  const openAddWordModal = (): void => toggleVisible(true);
  const closeAddWordModal = (): void => toggleVisible(false);

  return { visible, openAddWordModal, closeAddWordModal };
};
