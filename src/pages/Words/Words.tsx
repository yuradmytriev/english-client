import React, { useEffect, FC } from 'react';
import { Col } from 'antd';
import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { IWord } from 'interfaces/IWord';
import { Word } from 'components/Word';
import { WordContainer } from 'components/Word/WordContainer';
import { AddWord } from 'components/AddWord';
import { ExportToExelButton } from 'components/ExportToExelButton';
import { Categories } from 'modules/categories/components';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { useWordsInfo } from 'state/wordsInfo/useWordsInfo';
import { WordsFilter, useWordsFilter, IUseWordsFilter } from './WordsFilter';
import { ToggleWordsInfo } from './ToggleWordsInfo';
import * as S from './styles';

const createWordsGroup = words => {
  const filtered = words.filter(word => !word.category);

  return orderBy(
    Object.entries(groupBy(filtered, 'word')),
    item => item[1][0]?.updatedDate,
    ['desc'],
  );
};

export const Words: FC = () => {
  const { showWordsInfo } = useWordsInfo();
  const { words, fetchWordsList } = useFetchWordsList();

  const relatedWordsGroup: any[] = createWordsGroup(words);

  const {
    updatedWords,
    showMemoizedWords,
    showUnlearnedWords,
    showAllWords,
    setWords,
  }: IUseWordsFilter = useWordsFilter(relatedWordsGroup);

  useEffect(() => {
    fetchWordsList();
    setWords(relatedWordsGroup);
    // TODO: remove JSON.stringify
  }, [JSON.stringify(words)]);

  const renderWords = ([_, words]: [string, IWord[]]) => {
    const [mainWord]: IWord[] = words;
    const { id, word } = mainWord;
    const areSeveralWords: boolean = words.length > 1;
    const [firstWord]: IWord[] = words;

    return (
      word && (
        <Col key={id} xs={24} sm={12} md={8} lg={8} xl={6}>
          <WordContainer areSeveralWords={areSeveralWords}>
            <Word firstWord={firstWord} showInfo={showWordsInfo} />
          </WordContainer>
        </Col>
      )
    );
  };

  return (
    <>
      <WordsFilter
        showAllWords={showAllWords}
        showMemoizedWords={showMemoizedWords}
        showUnlearnedWords={showUnlearnedWords}
      />
      <Categories />
      <S.WordWrapper gutter={12}>
        {!isEmpty(words) && updatedWords.map(renderWords)}
        <ExportToExelButton />
        <AddWord />
        <ToggleWordsInfo />
      </S.WordWrapper>
    </>
  );
};
