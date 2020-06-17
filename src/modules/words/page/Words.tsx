import React, { useEffect, FC } from 'react';
import { Col } from 'antd';
import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { IWord } from 'interfaces/IWord';
import { Word } from 'shared/components/Word';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { CreateCategories } from 'modules/categories/components/CreateCategories';
import { Categories } from 'modules/categories/components';
import { useWordsInfo } from 'shared/state/wordsInfo/useWordsInfo';
import { useFetchCategories } from 'modules/categories/state/categories/useCategories';
import { useFetchWordsList } from 'shared/state/fetchWordsList/useFetchWordsList';
import {
  WordsFilter,
  useWordsFilter,
  IUseWordsFilter,
} from '../components/WordsFilter';
import { AddWord } from '../components/AddWord';
import { ToggleWordsInfo } from '../components/ToggleWordsInfo';
import { ExportToExelButton } from '../components/ExportToExelButton';
import * as S from './styles';

const createWordsGroup = (words: IWord[]) => {
  const filtered = words.filter((word: IWord) => !word.category);

  return orderBy(
    Object.entries(groupBy(filtered, 'word')),
    item => item[1][0]?.updatedDate,
    ['desc'],
  );
};

export const Words: FC = () => {
  const { showWordsInfo } = useWordsInfo();
  const { unlinkCategories } = useFetchCategories();
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

  const onDropEnd = async (id: string, categoryId?: string) => {
    if (categoryId) {
      await unlinkCategories(id, categoryId);
    }
  };

  return (
    <>
      <WordsFilter
        showAllWords={showAllWords}
        showMemoizedWords={showMemoizedWords}
        showUnlearnedWords={showUnlearnedWords}
      />
      <Categories />
      <DropContainer onDropEnd={(id, word) => onDropEnd(id, word)}>
        <S.WordWrapper gutter={12}>
          {!isEmpty(words) && updatedWords.map(renderWords)}
          <ExportToExelButton />
          <AddWord />
          <CreateCategories />
          <ToggleWordsInfo />
        </S.WordWrapper>
      </DropContainer>
    </>
  );
};
