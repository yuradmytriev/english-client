import React, { FC, useEffect } from 'react';
import { Col, Collapse, Icon } from 'antd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Word } from 'shared/components/Word';
import { DropContainer } from 'shared/components/DnD/DropContainer';
import { WordContainer } from 'shared/components/Word/WordContainer';
import { IWord } from 'shared/interfaces/IWord';
import { ICategory } from 'modules/categories/interfaces/ICategory';
import { useCategories } from 'modules/categories/state/categories/useCategories';
import * as S from './styles';
import 'shared/styles/animation.css';

const { Panel } = Collapse;

interface ILinkCategory {
  wordId: string;
  categoryId: string;
}

const CategoriesWords: FC<{ words: IWord[] }> = ({ words }): any =>
  words.map((word: IWord) => (
    <Col key={word.id} xs={24} sm={24} md={24} lg={24} xl={24}>
      <WordContainer areSeveralWords={false}>
        <Word wordInfo={word} />
      </WordContainer>
    </Col>
  ));

const DeleteCategory: FC<{ id: number }> = ({ id }) => {
  const { deleteCategory } = useCategories();

  return (
    <Icon
      type="close"
      onClick={event => {
        event.stopPropagation();
        deleteCategory(id);
      }}
    />
  );
};

export const Categories = () => {
  const { categories, fetchCategories, linkCategories } = useCategories();

  useEffect(() => {
    fetchCategories();
  }, []);

  const linkWordToCategory = ({ wordId, categoryId }: ILinkCategory) => {
    linkCategories(wordId, categoryId);
  };

  if (!categories.length) {
    return null;
  }

  return (
    <S.CategoriesLayout>
      <TransitionGroup>
        {categories.map(({ id, name, words }: ICategory) => (
          <CSSTransition key={id} timeout={250} classNames="item">
            <S.CategoryWrapper key={id}>
              <Collapse bordered={false} expandIconPosition="left">
                <Panel
                  key={id}
                  header={name}
                  extra={<DeleteCategory id={id} />}
                >
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
          </CSSTransition>
        ))}
      </TransitionGroup>
    </S.CategoriesLayout>
  );
};
