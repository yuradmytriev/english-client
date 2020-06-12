import React, { FC, useEffect } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { IUseWordsFilter } from './useWordsFilter';
import * as S from './styles';

enum WordFilters {
  all = 'all',
  memoized = 'memoized',
  unlearned = 'unlearned',
}

export const WordsFilter: FC<Omit<
  IUseWordsFilter,
  'updatedWords' | 'setWords'
>> = ({ showMemoizedWords, showUnlearnedWords, showAllWords }) => {
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
      <Radio.Group
        buttonStyle="solid"
        onChange={filterWords}
        defaultValue="all"
      >
        <Radio.Button value="all">All words</Radio.Button>
        <Radio.Button value="memoized">Memoized words</Radio.Button>
        <Radio.Button value="unlearned">Unlearned words</Radio.Button>
      </Radio.Group>
    </S.FilterWordsWrapper>
  );
};
