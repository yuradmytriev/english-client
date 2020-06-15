import React, { FC } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { IWord } from 'interfaces/IWord';
import { useTrainingWords } from '../hooks/useTrainingWords';
import { WordCard } from '../components/WordCard';
import './animation.css';

const showFirst = (_: unknown, index: number): boolean => index === 0;

export const Training: FC = () => {
  const { trainingWords, setTrainingWords } = useTrainingWords();

  const deleteTrainingWord = (id: number) => {
    setTrainingWords(
      (trainingWords as IWord[]).filter((word: IWord) => word.id !== id),
    );
  };

  if (!trainingWords) {
    return null;
  }

  return (
    <TransitionGroup>
      {(trainingWords as IWord[]).filter(showFirst).map(word => (
        <CSSTransition key={word.id} timeout={500} classNames="item">
          <WordCard {...word} deleteTrainingWord={deleteTrainingWord} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
