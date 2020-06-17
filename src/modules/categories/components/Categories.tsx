import React, { FC, useEffect } from 'react';
import { Col, Collapse, Icon } from 'antd';
import { Word } from 'shared/components/Word';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { IWord } from 'interfaces/IWord';
import { ICategory } from 'modules/categories/interfaces/ICategory';
import { CategoriesSDK } from 'modules/categories/sdk/CategoriesSDK';
import { useWordsInfo } from 'shared/state/wordsInfo/useWordsInfo';
import { useFetchCategories } from 'modules/categories/state/categories/useCategories';
import * as S from './styles';

const { Panel } = Collapse;

interface ILinkCategory {
  wordId: string;
  categoryId: string;
}

const CategoriesWords: FC<{ words: IWord[] }> = ({ words }): any => {
  const { showWordsInfo } = useWordsInfo();

  return words.map((word: IWord) => (
    <Col key={word.id} xs={24} sm={24} md={24} lg={24} xl={24}>
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
  const { categories, fetchCategories, linkCategories } = useFetchCategories();

  useEffect(() => {
    fetchCategories();
  }, [categories.length]);

  const linkWordToCategory = ({ wordId, categoryId }: ILinkCategory) => {
    linkCategories(wordId, categoryId);
  };

  if (!categories.length) {
    return null;
  }

  return (
    <S.CategoriesLayout>
      {categories.map(({ id, name, words }: ICategory) => (
        <S.CategoryWrapper key={id}>
          <Collapse bordered={false} expandIconPosition="left">
            <Panel key={id} header={name} extra={<DeleteCategory id={id} />}>
              <DropContainer
                onDropEnd={wordId =>
                  linkWordToCategory({
                    wordId: String(wordId),
                    categoryId: String(id),
                  })
                }
              >
                <S.WordsWrapper gutter={12}>
                  {!!words.length && <CategoriesWords words={words} />}
                </S.WordsWrapper>
              </DropContainer>
            </Panel>
          </Collapse>
        </S.CategoryWrapper>
      ))}
    </S.CategoriesLayout>
  );
};
