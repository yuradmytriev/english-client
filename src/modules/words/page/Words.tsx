import React, { FC } from 'react';
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
import { CreateCategories } from 'modules/categories/components/CreateCategories';
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
import { AddWord } from '../components/AddWord';
import { ToggleWordsInfo } from '../components/ToggleWordsInfo';
import { WordsCount } from '../components/WordsCount';
import { LearnedWordsCount } from '../components/LearnedWordsCount';
import 'shared/styles/animation.css';
import * as S from './styles';

const createWordsGroup = (words: IWord[]) => {
  const filtered = words.filter((word: IWord) => !word.category);

  return Object.entries(groupBy(filtered, 'word'));
};

export const Words: FC = () => {
  const [words] = useFetchToState(`${SERVER_URL}/words/count`);
  const { showWordsInfo } = useWordsInfo();
  const { unlinkCategories } = useCategories();
  const { wordsOffset, fetchWordsOffset } = useFetchWordsOffset();

  const relatedWordsGroup: any[] = createWordsGroup(wordsOffset);

  const {
    setWords,
    filteredWords,
    showAllWords,
    showMemoizedWords,
    showUnlearnedWords,
  }: IUseWordsFilter = useWordsFilter(relatedWordsGroup);

  useDeepCompareEffect(() => {
    const firstWords: number = 0;
    fetchWordsOffset(firstWords);

    setWords(relatedWordsGroup);
  }, [wordsOffset]);

  const renderWords = ([_, words]: [string, IWord[]]) => {
    const [mainWord]: IWord[] = words;
    const { id, word } = mainWord;
    const areSeveralWords: boolean = words.length > 1;
    const [firstWord]: IWord[] = words;

    return (
      word && (
        <CSSTransition key={id} timeout={500} classNames="item">
          <Col key={id} xs={24} sm={24} md={8} lg={8} xl={6}>
            <WordContainer areSeveralWords={areSeveralWords}>
              <Word firstWord={firstWord} showInfo={showWordsInfo} />
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
          showAllWords={() => showAllWords(relatedWordsGroup)}
          showMemoizedWords={() => showMemoizedWords(relatedWordsGroup)}
          showUnlearnedWords={() => showUnlearnedWords(relatedWordsGroup)}
        />
        <S.WordsCountContainer>
          {!isEmpty(wordsOffset) && <WordsCount />}
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
};
