import React, { FC } from 'react';
import { Button } from 'antd';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTrainingWords } from '../hooks/useTrainingWords';
import * as S from './styles';
import './animation.css';

const showFirst = (_, index: number): boolean => index === 0;

export const Training: FC = () => {
  const { trainingWords, setTrainingWords } = useTrainingWords();

  const removeTrainingWord = (id: number) => {
    setTrainingWords(trainingWords.filter((word: IWord) => word.id !== id));
  };

  const handleMemoized = (id: number): void => {
    const wordProps: Pick<IWord, 'learned'> = { learned: true };

    WordsSDK.updateJSON({
      wordId: id,
      wordProps,
    });

    removeTrainingWord(id);
  };

  if (!trainingWords) {
    return null;
  }

  return (
    <>
      <TransitionGroup>
        {(trainingWords as IWord[])
          .filter(showFirst)
          .map(({ id, word, context }) => (
            <CSSTransition key={id} timeout={500} classNames="item">
              <S.Container>
                <S.Wrapper>
                  <S.Word>{word}</S.Word>
                  <S.Description>{context}</S.Description>

                  <S.ButtonsWrapper>
                    <Button
                      onClick={() => handleMemoized(id)}
                      size="large"
                      type="primary"
                    >
                      Know
                    </Button>
                    <Button
                      onClick={() => removeTrainingWord(id)}
                      size="large"
                      type="danger"
                    >
                      Missed
                    </Button>
                  </S.ButtonsWrapper>
                </S.Wrapper>
              </S.Container>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};
