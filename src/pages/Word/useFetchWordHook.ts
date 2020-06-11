import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWord } from 'interfaces/IWord';
import { FETCH_WORD_URL } from '../../constants';

export const useFetchWordHook = () => {
  const { wordName }: { wordName?: string } = useParams();
  const [word, setWord] = useState<IWord[] | null>(null);

  useEffect(() => {
    (async () => {
      if (wordName) {
        const fetchWordURL: string = `${FETCH_WORD_URL}/find/${wordName}`;

        const response: Response = await fetch(fetchWordURL);
        const word: IWord[] = await response.json();

        setWord(word);
      }
    })();
  }, [wordName]);

  return { word };
};
