import React, { FC } from 'react';
import { Col, Collapse, Icon } from 'antd';
import { Word } from 'components/Word';
import { DropContainer } from 'components/DnD/DropContainer';
import { WordContainer } from 'components/Word/WordContainer';
import { IWord } from 'interfaces/IWord';
import { ICategory } from 'interfaces/ICategory';
import { CategoriesSDK } from 'sdk/CategoriesSDK';
import { useWordsInfo } from 'state/wordsInfo/useWordsInfo';
import { useFetchCategories } from '../hooks/useFetchCategories';
import * as S from './styles';

const { Panel } = Collapse;

interface ILinkCategory {
  wordId: string;
  categoryId: string;
}

const CategoriesWords: FC<{ words: IWord[] }> = ({ words }): any => {
  const { showWordsInfo } = useWordsInfo();

  return words.map((word: IWord) => (
    <Col key={word.id} xs={24} sm={12} md={8} lg={8} xl={6}>
      <WordContainer areSeveralWords={false}>
        <Word firstWord={word} showInfo={showWordsInfo} />
      </WordContainer>
    </Col>
  ));
};

const DeleteCategory: FC<{ id: number }> = ({ id }) => (
  <Icon type="close" onClick={() => CategoriesSDK.delete(id)} />
);

export const Categories = () => {
  const { categories } = useFetchCategories();

  const linkWordToCategory = ({ wordId, categoryId }: ILinkCategory) => {
    CategoriesSDK.linkWordToCategory(wordId, categoryId);
  };

  if (!categories.length) {
    return null;
  }

  return (
    <S.CategoriesWrapper>
      <Collapse bordered={false} expandIconPosition="left">
        {categories.map(({ id, name, words }: ICategory) => (
          <Panel key={id} header={name} extra={<DeleteCategory id={id} />}>
            <DropContainer
              onDropEnd={id =>
                linkWordToCategory({
                  wordId: String(id),
                  categoryId: String(id),
                })
              }
            >
              <S.WordsWrapper gutter={12}>
                {words.length && <CategoriesWords words={words} />}
              </S.WordsWrapper>
            </DropContainer>
          </Panel>
        ))}
      </Collapse>
    </S.CategoriesWrapper>
  );
};
