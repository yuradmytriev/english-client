import React, { FC } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { IUseWordsFilter } from './useWordsFilter';
import * as S from './styles';

enum WordFilters {
  all = 'all',
  memoized = 'memoized',
  unlearned = 'unlearned',
}

export const WordsFilter: FC<Omit<IUseWordsFilter, 'updatedWords'>> = ({
  showMemoizedWords,
  showUnlearnedWords,
  showAllWords,
}) => {
  const filterWords = (checkedList: RadioChangeEvent) => {
    const value: WordFilters = checkedList?.target?.value;

    const filterActions: {
      all: () => void;
      memoized: () => void;
      unlearned: () => void;
    } = {
      all: showAllWords,
      memoized: showMemoizedWords,
      unlearned: showUnlearnedWords,
    };

    filterActions[value]();
  };

  return (
    <S.FilterWordsWrapper>
      <Radio.Group onChange={filterWords} defaultValue="all">
        <Radio value="all">All words</Radio>
        <Radio value="memoized">Memoized words</Radio>
        <Radio value="unlearned">Unlearned words</Radio>
      </Radio.Group>
    </S.FilterWordsWrapper>
  );
};
