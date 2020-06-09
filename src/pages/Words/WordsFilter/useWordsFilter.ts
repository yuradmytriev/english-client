import { useEffect, useState } from 'react';

export interface IUseWordsFilter {
  updatedWords: any[];
  showMemoizedWords: () => void;
  showUnlearnedWords: () => void;
  showAllWords: () => void;
}

export const useWordsFilter = (words: any[]): IUseWordsFilter => {
  const [updatedWords, setWords] = useState(words);

  useEffect(() => {
    setWords(words);

    // eslint-disable-next-line
  }, [words.length]);

  const showMemoizedWords = (): void => {
    const memoizedWords = words.filter(word => word[1][0].learned);
    setWords(memoizedWords);
  };

  const showUnlearnedWords = (): void => {
    const memoizedWords = words.filter(word => !word[1][0].learned);
    setWords(memoizedWords);
  };

  const showAllWords = (): void => {
    setWords(words);
  };

  return { updatedWords, showMemoizedWords, showUnlearnedWords, showAllWords };
};
