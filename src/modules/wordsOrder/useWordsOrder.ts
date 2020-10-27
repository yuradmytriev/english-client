import { useState } from 'react';
import { toggleWordsOrder } from 'shared/storage/wordsOrder';

export const useWordsOrder = () => {
  const initialWordsOrder = () =>
    window.localStorage.getItem('words-order') || 'DESC';
  const [wordsOrder, changeWordsOrderType] = useState(initialWordsOrder);

  const changeWordsOrder = () => {
    const order = toggleWordsOrder();
    changeWordsOrderType(order);
  };

  return [wordsOrder, changeWordsOrder];
};
