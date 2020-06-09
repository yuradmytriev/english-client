import React, { FC, MouseEvent } from 'react';
import { Icon } from 'antd';
import { IWord } from 'interfaces/IWord';
import {
  useFetchWordsList,
  IUseFetchWordsList,
} from 'state/fetchWordsList/useFetchWordsList';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../styles';

const DeleteWord: FC<{ id: number }> = ({ id }) => {
  const { fetchWordsList }: IUseFetchWordsList = useFetchWordsList();

  const deleteWord = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.stopPropagation();
    const wasWordDeletedSuccessfully = await WordsSDK.delete(id);

    if (wasWordDeletedSuccessfully) {
      fetchWordsList();
    }
  };

  return (
    <S.DeleteWrapper onClick={deleteWord}>
      <Icon type="delete" />
      <span>Delete</span>
    </S.DeleteWrapper>
  );
};

const MemorizeWord: FC<{ id: number }> = ({ id }) => {
  const memorizeWord = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    const wordProps: Pick<IWord, 'learned'> = { learned: true };
    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  return (
    <S.MemorizedWrapper onClick={memorizeWord}>
      <Icon type="bulb" />
      <span>Memorized</span>
    </S.MemorizedWrapper>
  );
};

export const WordActions: FC<{ firstWord: IWord }> = ({ firstWord }) => {
  const { id }: Pick<IWord, 'id'> = firstWord;

  return (
    <>
      <DeleteWord id={id} />
      <MemorizeWord id={id} />
    </>
  );
};
