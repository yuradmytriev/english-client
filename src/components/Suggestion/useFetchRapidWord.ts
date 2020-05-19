import { useEffect, useState } from 'react';
import pluralize from 'pluralize';
import { logger } from 'utils/logger';
import { ISuggestion } from './ISuggestion';
import { fetchWordFromRapid } from '../../utils/wordsApiFetch';

const ERROR: { FETCH_RAPID_WORD: string } = {
  FETCH_RAPID_WORD: `Can't fetch a word from Rapid API`,
};

export const useFetchRapidWord = ({
  word,
  type,
  originalWord,
}: Omit<ISuggestion, 'isEditMode' | 'id'>): [string[]] => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const titles: string = pluralize(type);

    fetchWordFromRapid(titles, word || originalWord)
      .then((words: { synonyms?: string[] }) => {
        if (words.synonyms) {
          setWords(words.synonyms);
        }

        return words;
      })
      .catch(e => {
        logger.error(`${ERROR.FETCH_RAPID_WORD}: ${e}`);
      });
  }, []);

  return [words];
};
