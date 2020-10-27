export const toggleWordsOrder = () => {
  const wordsOrderType = {
    DESC: 'ASC',
    ASC: 'DESC',
  };

  const storageWordsOrderType =
    window.localStorage.getItem('words-order') || 'DESC';

  const mappedWordsOrder = wordsOrderType[storageWordsOrderType];

  window.localStorage.setItem('words-order', mappedWordsOrder);

  return mappedWordsOrder;
};
