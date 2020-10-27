import React, { FC, memo, useState, useEffect } from 'react';
import { Col, Button } from 'antd';
import useDeepCompareEffect from 'use-deep-compare-effect';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import isEmpty from 'lodash/isEmpty';
import { IWord } from 'shared/interfaces/IWord';
import { Word } from 'shared/components/Word';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { Categories } from 'modules/categories/components';
import { useCategories } from 'modules/categories/state/categories/useCategories';
import { useFetchWordsOffset } from 'shared/state/fetchWordsOffset/useFetchWordsOffset';
import { useFetchToState } from 'shared/hooks/useFetchToState';
import { SERVER_URL } from 'shared/constants/url';
import { CheckWord } from 'modules/words/components/CheckWord';
import { toggleWordsOrder } from 'shared/storage/wordsOrder';
import {
  WordsFilter,
  useWordsFilter,
  IUseWordsFilter,
} from 'modules/wordsFilter';
import { WordsCount } from '../components/WordsCount';
import { LearnedWordsCount } from '../components/LearnedWordsCount';
import { ChangeWordsOrder } from 'modules/wordsOrder';
import 'shared/styles/animation.css';
import * as S from './styles';
import { useWordsOrder } from '../../wordsOrder/useWordsOrder';

const useLoadMore = (filteredWords, words, wordsOrder) => {
  const [offset, setOffset] = useState(0);
  const { fetchWordsOffset } = useFetchWordsOffset();

  useEffect(() => {
    if (!filteredWords.length || filteredWords.length < 20) {
      fetchWordsOffset(offset, wordsOrder);
      setTimeout(() => setOffset(offset + 1), 10);
    }
  }, [offset]);
};

export const Words: FC = memo(() => {
  const { categories, unlinkCategories } = useCategories();
  const [words] = useFetchToState(`${SERVER_URL}/words/count`);
  const { wordsOffset, fetchWordsOffset } = useFetchWordsOffset();
  const [wordsOrder] = useWordsOrder();

  const relatedWordsGroup: any[] = wordsOffset.filter(
    (word: IWord) => !word.category,
  );

  const {
    setWords,
    filteredWords,
    showAllWords,
    showMemoizedWords,
    showDraftWords,
    showUnlearnedWords,
  }: IUseWordsFilter = useWordsFilter(wordsOffset);

  useLoadMore(filteredWords, words, wordsOrder);

  useDeepCompareEffect(() => {
    const firstWords: number = 0;
    fetchWordsOffset(firstWords, wordsOrder);

    setWords(relatedWordsGroup);
  }, [wordsOffset, categories]);

  const renderWords = word => (
    <CSSTransition key={word.id} timeout={500} classNames="item">
      <Col key={word.id} xs={24} sm={24} md={8} lg={8} xl={6}>
        <WordContainer areSeveralWords={false}>
          <Word wordInfo={word} />
        </WordContainer>
      </Col>
    </CSSTransition>
  );

  const onDropEnd = async (id: string, categoryId?: string) => {
    if (categoryId) {
      await unlinkCategories(id, categoryId);
    }
  };

  const fetchWords = () => {
    const offset: number = 20;

    fetchWordsOffset(Math.ceil(wordsOffset.length / offset), wordsOrder);
  };

  return (
    <>
      <S.LearnedWordsLayout>
        <WordsFilter
          showAllWords={() => showAllWords(relatedWordsGroup)}
          showMemoizedWords={() => showMemoizedWords(relatedWordsGroup)}
          showUnlearnedWords={() => showUnlearnedWords(relatedWordsGroup)}
          showDraftWords={() => showDraftWords(relatedWordsGroup)}
        />
        <S.WordsCountContainer>
          {!isEmpty(wordsOffset) && <WordsCount words={words} />}
          {!isEmpty(wordsOffset) && <LearnedWordsCount />}
        </S.WordsCountContainer>
      </S.LearnedWordsLayout>
      <CheckWord />
      <Categories />
      <S.ChangeWordsOrderLayout>
        <ChangeWordsOrder />
      </S.ChangeWordsOrderLayout>
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
