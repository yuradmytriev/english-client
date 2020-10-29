import React, { FC, memo } from 'react';
import { Col } from 'antd';
import isEmpty from 'lodash/isEmpty';
import useDeepCompareEffect from 'use-deep-compare-effect';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Word } from 'shared/components/Word';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';
import { useFetchToState } from 'shared/hooks/useFetchToState';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { useFetchWordsOffset } from 'shared/state/fetchWordsOffset/useFetchWordsOffset';
import {
  WordsFilter,
  useWordsFilter,
  IUseWordsFilter,
} from 'modules/wordsFilter';
import { ChangeWordsOrder } from 'modules/wordsOrder';
import { Categories } from 'modules/categories/components';
import { useLoadMore } from 'modules/words/hooks/useLoadMore';
import { CheckWord } from 'modules/words/components/CheckWord';
import { useCategories } from 'modules/categories/state/categories/useCategories';
import { useWordsOrder } from '../../wordsOrder/useWordsOrder';
import { WordsCount } from '../components/WordsCount';
import { LearnedWordsCount } from '../components/LearnedWordsCount';
import 'shared/styles/animation.css';
import * as S from './styles';

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
    showAllWords,
    showDraftWords,
    filteredWords,
    showMemoizedWords,
    showUnlearnedWords,
  }: IUseWordsFilter = useWordsFilter(wordsOffset);

  useLoadMore(filteredWords, words, wordsOrder);

  useDeepCompareEffect(() => {
    const firstWords: number = 0;
    fetchWordsOffset(firstWords, wordsOrder);

    setWords(relatedWordsGroup);
  }, [wordsOffset, categories]);

  const fetchWords = () => {
    const offset: number = 20;

    fetchWordsOffset(Math.ceil(wordsOffset.length / offset), wordsOrder);
  };

  const onDropEnd = async (id: string, categoryId?: string) => {
    if (categoryId) {
      await unlinkCategories(id, categoryId);
    }
  };

  const renderWords = word => (
    <CSSTransition key={word.id} timeout={500} classNames="item">
      <Col key={word.id} xs={24} sm={24} md={8} lg={8} xl={6}>
        <WordContainer areSeveralWords={false}>
          <Word wordInfo={word} />
        </WordContainer>
      </Col>
    </CSSTransition>
  );

  return (
    <>
      <S.LearnedWordsLayout>
        <WordsFilter
          showAllWords={() => showAllWords(relatedWordsGroup)}
          showDraftWords={() => showDraftWords(relatedWordsGroup)}
          showMemoizedWords={() => showMemoizedWords(relatedWordsGroup)}
          showUnlearnedWords={() => showUnlearnedWords(relatedWordsGroup)}
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
              next={fetchWords}
              loader={<h4>Loading...</h4>}
              dataLength={wordsOffset.length}
              hasMore={wordsOffset.length !== words}
            >
              {!isEmpty(wordsOffset) && filteredWords.map(renderWords)}
            </InfiniteScroll>
          </TransitionGroup>
        </S.WordWrapper>
      </DropContainer>
    </>
  );
});
