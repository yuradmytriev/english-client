import React, { FC } from 'react';
import { Icon } from 'antd';

export const WordMemoizedMark: FC<{
  word: string;
  learned: boolean | undefined;
}> = ({ word, learned }) => (
  <div>
    {/* eslint react/jsx-one-expression-per-line:0 */}
    {word} {learned && <Icon style={{ color: '#18d218' }} type="check" />}
  </div>
);
