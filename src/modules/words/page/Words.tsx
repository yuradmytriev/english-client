import React, { FC, memo, useState, useEffect } from 'react';
import { Col } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';
import { IWord } from 'shared/interfaces/IWord';
import { Word } from 'shared/components/Word';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { Categories } from 'modules/categories/components';
import { useWordsInfo } from 'shared/state/wordsInfo/useWordsInfo';
import { useCategories } from 'modules/categories/state/categories/useCategories';
import { useFetchWordsOffset } from 'shared/state/fetchWordsOffset/useFetchWordsOffset';
import { useFetchToState } from 'shared/hooks/useFetchToState';
import { SERVER_URL } from 'shared/constants/url';
import {
  WordsFilter,
  useWordsFilter,
  IUseWordsFilter,
} from 'modules/wordsFilter';
import { WordsCount } from '../components/WordsCount';
import { LearnedWordsCount } from '../components/LearnedWordsCount';
import 'shared/styles/animation.css';
import * as S from './styles';

// const createWordsGroup = (words: IWord[]) => {
//   const filtered = words.filter((word: IWord) => !word.category);
//
//   return Object.entries(groupBy(filtered, 'word'));
// };

const useHook = filteredWords => {
  const [state, set] = useState(0);
  const { fetchWordsOffset } = useFetchWordsOffset();

  useEffect(() => {
    if (filteredWords.length < 10) {
      fetchWordsOffset(state);
      setTimeout(() => set(state + 1), 1000);
    }
  }, [state]);
};

export const Words: FC = memo(() => {
  const [words] = useFetchToState(`${SERVER_URL}/words/count`);
  const { showWordsInfo } = useWordsInfo();
  const { unlinkCategories } = useCategories();
  const { wordsOffset, fetchWordsOffset } = useFetchWordsOffset();

  const {
    setWords,
    filteredWords,
    showAllWords,
    showMemoizedWords,
    showUnlearnedWords,
  }: IUseWordsFilter = useWordsFilter(wordsOffset);
  useHook(filteredWords);

  useDeepCompareEffect(() => {
    const firstWords: number = 0;
    fetchWordsOffset(firstWords);

    setWords(wordsOffset);
  }, [wordsOffset]);

  const renderWords = (word: [string, IWord[]]) => {
    return (
      word && (
        <CSSTransition key={word.id} timeout={500} classNames="item">
          <Col key={word.id} xs={24} sm={24} md={8} lg={8} xl={6}>
            <WordContainer areSeveralWords={false}>
              <Word firstWord={word} showInfo={showWordsInfo} />
            </WordContainer>
          </Col>
        </CSSTransition>
      )
    );
  };

  const onDropEnd = async (id: string, categoryId?: string) => {
    if (categoryId) {
      await unlinkCategories(id, categoryId);
    }
  };

  const fetchWords = () => {
    const offset: number = 20;

    fetchWordsOffset(Math.ceil(wordsOffset.length / offset));
  };

  return (
    <>
      <S.LearnedWordsLayout>
        <WordsFilter
          showAllWords={() => showAllWords(wordsOffset)}
          showMemoizedWords={() => showMemoizedWords(wordsOffset)}
          showUnlearnedWords={() => showUnlearnedWords(wordsOffset)}
        />
        <S.WordsCountContainer>
          {!isEmpty(wordsOffset) && <WordsCount words={words} />}
          {!isEmpty(wordsOffset) && <LearnedWordsCount />}
        </S.WordsCountContainer>
      </S.LearnedWordsLayout>
      <Categories />
      <DropContainer onDropEnd={(id, word) => onDropEnd(id, word)}>
        <S.WordWrapper gutter={12}>
          <TransitionGroup style={{ width: '100%' }}>
            <InfiniteScroll
              dataLength={wordsOffset.length}
              next={fetchWords}
              hasMore={wordsOffset.length !== words}
              loader={<h4>Loading...</h4>}
            >
              {!isEmpty(wordsOffset) && filteredWords.map(renderWords)}
            </InfiniteScroll>
          </TransitionGroup>
        </S.WordWrapper>
      </DropContainer>
    </>
  );
});
