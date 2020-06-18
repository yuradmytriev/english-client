import { useEffect, useState } from 'react';
import { useFetchWords } from 'shared/state/fetchWords/useFetchWords';
import { IWord } from 'shared/interfaces/IWord';

export const useTrainingWords = () => {
  const { words, fetchWords } = useFetchWords();
  const [trainingWords, setTrainingWords] = useState<IWord[] | null>(null);

  useEffect(() => {
    fetchWords();

    const unlearnedWords: IWord[] = words.filter(word => !word.learned);
    setTrainingWords(unlearnedWords);
  }, [words.length]);

  return { trainingWords, setTrainingWords };
};
