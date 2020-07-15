import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWord } from 'shared/interfaces/IWord';
import { SERVER_URL } from 'shared/constants/url';

export const useFetchWord = () => {
  const { wordName }: { wordName?: string } = useParams();
  const [word, setWord] = useState<IWord[] | null>(null);

  useEffect(() => {
    (async () => {
      if (wordName) {
        const fetchWordURL: string = `${SERVER_URL}/word/find/${wordName}`;

        const response: Response = await fetch(fetchWordURL);
        const word: IWord[] = await response.json();

        setWord(word);
      }
    })();
  }, [wordName]);

  const updateWord = async () => {
    const fetchWordURL: string = `${SERVER_URL}/word/find/${wordName}`;

    const response: Response = await fetch(fetchWordURL);
    const word: IWord[] = await response.json();

    setWord(word);
  };

  return { word, updateWord };
};
