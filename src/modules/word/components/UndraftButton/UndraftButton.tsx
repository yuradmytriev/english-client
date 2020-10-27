import React from 'react';
import { Button } from 'antd';
import { WordsSDK } from 'shared/sdk/WordsSDK';

export const UndraftButton = ({ id }) => {
  const onClick = (): void => {
    WordsSDK.undraft(id);
  };

  return (
    <Button type="primary" onClick={onClick}>
      Undraft
    </Button>
  );
};
