import { useEffect, useState } from 'react';
import { fetchWordFromRapid } from '../../utils/wordsApiFetch';
import get from 'lodash/get';

interface IFrequencyStatus {
  color: string;
  title: string;
}

const getFrequencyStatus = (zipf: number): IFrequencyStatus => {
  const frequencyIndex: number = Math.ceil(zipf) - 1;

  const frequencyStatuses: Array<IFrequencyStatus> = [
    {
      color: '#880000',
      title: 'very rare',
    },
    {
      color: '#ff0202',
      title: 'rare',
    },
    {
      color: '#f97777',
      title: 'seldom',
    },
    {
      color: '#abc0f3',
      title: 'sometimes',
    },
    {
      color: '#6693ff',
      title: 'regular',
    },
    {
      color: '#054eff',
      title: 'often',
    },
    {
      color: '#002b94',
      title: 'frequently',
    },
  ];

  return frequencyStatuses[frequencyIndex];
};

export const useFrequency = (word: string) => {
  const [frequency, setFrequency] = useState<IFrequencyStatus | null>(null);

  useEffect(() => {
    (async () => {
      const response = await fetchWordFromRapid('frequency', word);
      const frequency = get(response, 'frequency.zipf', null);

      const frequencyStatus: IFrequencyStatus = getFrequencyStatus(frequency);

      setFrequency(frequencyStatus);
    })();
  }, []);

  return [frequency];
};
