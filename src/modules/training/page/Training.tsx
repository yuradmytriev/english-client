import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useFetchWordsList } from 'state/fetchWordsList/useFetchWordsList';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from './styles';

const useTrainingWords = () => {
  const { words, fetchWordsList } = useFetchWordsList();
  const [trainingWords, setTrainingWords] = useState<IWord[] | null>(null);

  useEffect(() => {
    fetchWordsList();

    const unlearnedWords: IWord[] = words.filter(word => !word.learned);
    setTrainingWords(unlearnedWords);
  }, [words.length]);

  return { trainingWords, setTrainingWords };
};

export const Training = () => {
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
      {(trainingWords as IWord[])
        .filter((i, index) => index === 0)
        .map(({ id, word, context }) => (
          <S.Container key={id}>
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
        ))}
    </>
  );
};
