import { useEffect, useState } from 'react';
import { useFetchWordsList } from 'shared/state/fetchWordsList/useFetchWordsList';
import { IWord } from 'interfaces/IWord';

export const useTrainingWords = () => {
  const { words, fetchWordsList } = useFetchWordsList();
  const [trainingWords, setTrainingWords] = useState<IWord[] | null>(null);

  useEffect(() => {
    fetchWordsList();

    const unlearnedWords: IWord[] = words.filter(word => !word.learned);
    setTrainingWords(unlearnedWords);
  }, [words.length]);

  return { trainingWords, setTrainingWords };
};
