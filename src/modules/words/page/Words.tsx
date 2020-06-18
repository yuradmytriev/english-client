import React, { useEffect, FC } from 'react';
import { Col } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import { IWord } from 'shared/interfaces/IWord';
import { Word } from 'shared/components/Word';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { CreateCategories } from 'modules/categories/components/CreateCategories';
import { Categories } from 'modules/categories/components';
import { useWordsInfo } from 'shared/state/wordsInfo/useWordsInfo';
import { useCategories } from 'modules/categories/state/categories/useCategories';
import { useFetchWords } from 'shared/state/fetchWords/useFetchWords';
import {
  WordsFilter,
  useWordsFilter,
  IUseWordsFilter,
} from '../components/WordsFilter';
import { AddWord } from '../components/AddWord';
import { ToggleWordsInfo } from '../components/ToggleWordsInfo';
import { WordsCount } from '../components/WordsCount';
import { LearnedWordsCount } from '../components/LearnedWordsCount';
import { ExportToExelButton } from '../components/ExportToExelButton';
import 'shared/styles/animation.css';
import * as S from './styles';
import InfiniteScroll from 'react-infinite-scroll-component';

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
  const { unlinkCategories } = useCategories();
  const { words, fetchWords } = useFetchWords();

  const relatedWordsGroup: any[] = createWordsGroup(words);

  const {
    setWords,
    updatedWords,
    showAllWords,
    showMemoizedWords,
    showUnlearnedWords,
  }: IUseWordsFilter = useWordsFilter(relatedWordsGroup);

  useEffect(() => {
    fetchWords();
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
        <CSSTransition key={id} timeout={500} classNames="item">
          <Col key={id} xs={24} sm={12} md={8} lg={8} xl={6}>
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

  const fetchData = async () => {
    fetchWords();
  };

  return (
    <>
      <S.LearnedWordsLayout>
        <WordsFilter
          showAllWords={showAllWords}
          showMemoizedWords={showMemoizedWords}
          showUnlearnedWords={showUnlearnedWords}
        />
        <div>
          {!isEmpty(words) && <WordsCount words={words} />}
          {!isEmpty(words) && <LearnedWordsCount words={words} />}
        </div>
      </S.LearnedWordsLayout>
      <Categories />
      <DropContainer onDropEnd={(id, word) => onDropEnd(id, word)}>
        <S.WordWrapper gutter={12}>
          <TransitionGroup>
            {/*<InfiniteScroll*/}
            {/*  dataLength={121} //This is important field to render the next data*/}
            {/*  next={fetchData}*/}
            {/*  hasMore={true}*/}
            {/*  loader={<h4>Loading...</h4>}*/}
            {/*>*/}
            {!isEmpty(words) && updatedWords.map(renderWords)}
            {/*</InfiniteScroll>*/}
          </TransitionGroup>
          <ExportToExelButton />
          <AddWord />
          <CreateCategories />
          <ToggleWordsInfo />
        </S.WordWrapper>
      </DropContainer>
    </>
  );
};
