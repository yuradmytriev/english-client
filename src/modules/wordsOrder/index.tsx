import { Button } from 'antd';
import React from 'react';
import { useWordsOrder } from './useWordsOrder';

const wordsOrderMap = {
  DESC: '  Last words',
  ASC: '  First words',
};

export const ChangeWordsOrder = () => {
  const [wordsOrder, changeWordsOrder] = useWordsOrder();

  return (
    <>
      <Button onClick={changeWordsOrder}>Change words order</Button>
      {wordsOrderMap[wordsOrder]}
    </>
  );
};
