import React, { FC } from 'react';
import { Button, Icon } from 'antd';
import { IWord } from 'interfaces/IWord';
import {
  useFetchWordsList,
  IUseFetchWordsList,
} from 'state/fetchWordsList/useFetchWordsList';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../styles';

export const WordActions: FC<{ firstWord: IWord }> = ({ firstWord }) => {
  const { id }: IWord = firstWord;
  const { fetchWordsList }: IUseFetchWordsList = useFetchWordsList();

  const deleteWord = async (): Promise<void> => {
    const wasWordDeletedSuccessfully = await WordsSDK.delete(id);

    if (wasWordDeletedSuccessfully) {
      fetchWordsList();
    }
  };

  const memorizeWord = (): void => {
    const wordProps: Pick<IWord, 'learned'> = { learned: true };
    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.IconContent onClick={deleteWord}>
      <div>
        <Icon type="delete" />
        <span>Delete</span>
      </div>
      <Button type="primary" onClick={memorizeWord}>
        Memorized
      </Button>
    </S.IconContent>
  );
};
