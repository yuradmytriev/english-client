import { useEffect, useState } from 'react';
import { useFetchWordsOffset } from 'shared/state/fetchWordsOffset/useFetchWordsOffset';

export const useLoadMore = (filteredWords, words, wordsOrder) => {
  const [offset, setOffset] = useState(0);
  const { fetchWordsOffset } = useFetchWordsOffset();

  useEffect(() => {
    if (!filteredWords.length || filteredWords.length < 20) {
      fetchWordsOffset(offset, wordsOrder);
      setTimeout(() => setOffset(offset + 1), 10);
    }
  }, [offset]);
};
