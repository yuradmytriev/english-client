import { useEffect, useState } from 'react';
import { IWord } from 'shared/interfaces/IWord';
import { useFetchWords } from 'shared/state/fetchWords/useFetchWords';

export const useTrainingWords = () => {
  const { words, fetchWords } = useFetchWords();
  const [trainingWords, setTrainingWords] = useState<IWord[] | any[]>([]);

  useEffect(() => {
    fetchWords();
    const unlearnedWords: IWord[] = words.filter(word => !word.learned);

    setTrainingWords(unlearnedWords);
  }, [words.length]);

  return { trainingWords, setTrainingWords };
};
