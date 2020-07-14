import { useEffect, useReducer } from 'react';
import { IUseWordsFilter } from '..';
import { wordsFilterStorage } from '../storage/wordsFilterStorage';
import { FILTERS } from '../constants/filters';

const { ALL, LEARNED, UNLEARNED, DRAFT } = FILTERS;

const filters = (state, action) => {
  switch (action.type) {
    case ALL:
      return action.data;
    case LEARNED:
      return action.data.filter(word => word.learned && !word.draft);
    case UNLEARNED:
      return action.data.filter(word => !word.learned && !word.draft);
    case DRAFT:
      return action.data.filter(word => word.draft);
    default:
      throw state;
  }
};

const useInitWords = (dispatch, words) => {
  useEffect(() => {
    const filter = wordsFilterStorage.getFilter();

    if (filter) {
      dispatch({ type: filter, data: words });
    } else {
      dispatch({ type: ALL, data: words });
    }
  }, [words.length]);
};

export const useWordsFilter = (words: any[]): IUseWordsFilter => {
  const [filteredWords, dispatch] = useReducer(filters, words);

  useInitWords(dispatch, words);

  const showMemoizedWords = (data): void => {
    wordsFilterStorage.setFilter(LEARNED);

    dispatch({ type: LEARNED, data });
  };

  const showDraftWords = (data): void => {
    wordsFilterStorage.setFilter(DRAFT);

    dispatch({ type: DRAFT, data });
  };

  const showUnlearnedWords = (data): void => {
    wordsFilterStorage.setFilter(UNLEARNED);

    dispatch({ type: UNLEARNED, data });
  };

  const showAllWords = (data): void => {
    wordsFilterStorage.setFilter(ALL);

    dispatch({ type: ALL, data });
  };

  return {
    filteredWords,
    showDraftWords,
    showMemoizedWords,
    showUnlearnedWords,
    showAllWords,
    setWords: data => {
      const filter = wordsFilterStorage.getFilter();

      if (filter) {
        dispatch({ type: filter, data });
      }
    },
  };
};
