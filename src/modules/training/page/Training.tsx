import React, { FC } from 'react';
import { IWord } from 'interfaces/IWord';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTrainingWords } from '../hooks/useTrainingWords';
import { WordCard } from '../components/WordCard';
import './animation.css';

const showFirst = (_, index: number): boolean => index === 0;

export const Training: FC = () => {
  const { trainingWords, setTrainingWords } = useTrainingWords();

  const removeTrainingWord = (id: number) => {
    setTrainingWords(trainingWords.filter((word: IWord) => word.id !== id));
  };

  if (!trainingWords) {
    return null;
  }

  return (
    <>
      <TransitionGroup>
        {(trainingWords as IWord[]).filter(showFirst).map(word => (
          <CSSTransition key={word.id} timeout={500} classNames="item">
            <WordCard {...word} removeTrainingWord={removeTrainingWord} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
