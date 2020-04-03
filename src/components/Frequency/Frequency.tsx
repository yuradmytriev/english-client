import React, { useEffect, useState, FC } from 'react';
import { Tooltip } from 'antd';
import { fetchWordFromRapid } from '../../utils/wordsApiFetch';
import * as S from './styles';

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

export const Frequency: FC<{ word: string; showTitle: boolean }> = ({
  word,
  showTitle,
}) => {
  const [frequency, setFrequency] = useState<IFrequencyStatus | null>(null);

  useEffect(() => {
    (async () => {
      const {
        frequency: { zipf },
      } = await fetchWordFromRapid('frequency', word);

      const frequencyStatus: IFrequencyStatus = getFrequencyStatus(zipf);

      setFrequency(frequencyStatus);
    })();
  }, []);

  return frequency ? (
    <>
      <Tooltip title={showTitle ? <span>{frequency.title}</span> : null}>
        <S.Color color={frequency.color} />
      </Tooltip>
    </>
  ) : null;
};
