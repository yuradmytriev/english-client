import React, { useEffect, useState } from 'react';
import { Col, Collapse } from 'antd';
import { Word } from 'components/Word';
import { DropContainer } from 'components/DnD/DropContainer';
import { WordContainer } from 'components/Word/WordContainer';
import { IWord } from 'interfaces/IWord';
import { ICategory } from 'interfaces/ICategory';
import { CategoriesSDK } from 'sdk/CategoriesSDK';
import { useWordsInfo } from 'state/wordsInfo/useWordsInfo';
import * as S from './styles';

const { Panel } = Collapse;

export const Categories = () => {
  const { showWordsInfo } = useWordsInfo();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoriesSDK.fetch().then(setCategories);
  }, []);

  const onDropEnd = (id: string, category: string) => {
    CategoriesSDK.linkWordToCategory(id, category);
  };

  const renderCategoriesWords = (category: ICategory) =>
    category?.words.map((word: IWord) => (
      <Col key={word.id} xs={24} sm={12} md={8} lg={8} xl={6}>
        <WordContainer areSeveralWords={false}>
          <Word firstWord={word} showInfo={showWordsInfo} />
        </WordContainer>
      </Col>
    ));

  const renderCategories = (categories: ICategory[]) =>
    categories.map((category: ICategory) => (
      <Panel header={category.name} key={category.id}>
        <DropContainer onDropEnd={id => onDropEnd(id, String(category.id))}>
          <S.WordsWrapper gutter={12}>
            {renderCategoriesWords(category)}
          </S.WordsWrapper>
        </DropContainer>
      </Panel>
    ));

  return (
    <S.CategoriesWrapper>
      <Collapse bordered={false}>
        {categories.length ? renderCategories(categories) : null}
      </Collapse>
    </S.CategoriesWrapper>
  );
};
