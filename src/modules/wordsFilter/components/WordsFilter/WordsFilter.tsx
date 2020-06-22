import React, { FC } from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import { IUseWordsFilter } from '../..';
import { FILTERS } from '../../constants/filters';
import { wordsFilterStorage } from '../../storage/wordsFilterStorage';
import * as S from './styles';

const { ALL, LEARNED, UNLEARNED } = FILTERS;

export const WordsFilter: FC<Omit<
  IUseWordsFilter,
  'filteredWords' | 'setWords'
>> = ({ showMemoizedWords, showUnlearnedWords, showAllWords }) => {
  const filterWordsActions = (checkedList: RadioChangeEvent) => {
    const value: WordFilters = checkedList?.target?.value;

    const filterActions: {
      ALL: (words: any) => void;
      LEARNED: (words: any) => void;
      UNLEARNED: (words: any) => void;
    } = {
      ALL: showAllWords,
      LEARNED: showMemoizedWords,
      UNLEARNED: showUnlearnedWords,
    };

    filterActions[value]();
  };

  const defaultFilter = wordsFilterStorage.getFilter();

  return (
    <S.FilterWordsWrapper>
      <Radio.Group
        buttonStyle="solid"
        onChange={filterWordsActions}
        defaultValue={defaultFilter}
      >
        <Radio.Button value={ALL}>All words</Radio.Button>
        <Radio.Button value={LEARNED}>Memoized words</Radio.Button>
        <Radio.Button value={UNLEARNED}>Unlearned words</Radio.Button>
      </Radio.Group>
    </S.FilterWordsWrapper>
  );
};
