import React, { FC, MouseEvent } from 'react';
import { Icon } from 'antd';
import { IWord } from 'interfaces/IWord';
import {
  useFetchWordsList,
  IUseFetchWordsList,
} from 'shared/state/fetchWordsList/useFetchWordsList';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import * as S from '../styles';

const DeleteWord: FC<{ id: number }> = ({ id }) => {
  const { fetchWordsList }: IUseFetchWordsList = useFetchWordsList();

  const deleteWord = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.stopPropagation();
    const deletedWord: boolean = await WordsSDK.delete(id);

    if (deletedWord) {
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
  const { fetchWordsList } = useFetchWordsList();

  const memorizeWord = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.stopPropagation();
    const wordProps: Pick<IWord, 'learned'> = { learned: true };
    const memoizedWord: IWord = await WordsSDK.updateJSON({
      wordId: id,
      wordProps,
    });

    if (memoizedWord.id) {
      fetchWordsList();
    }
  };

  return (
    <S.MemorizedWrapper onClick={memorizeWord}>
      <Icon type="bulb" />
      <span>Memorized</span>
    </S.MemorizedWrapper>
  );
};

const ForgotWord: FC<{ id: number }> = ({ id }) => {
  const { fetchWordsList } = useFetchWordsList();

  const forgotWord = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.stopPropagation();
    const wordProps: Pick<IWord, 'learned'> = { learned: false };
    const memoizedWord: IWord = await WordsSDK.updateJSON({
      wordId: id,
      wordProps,
    });

    if (memoizedWord.id) {
      fetchWordsList();
    }
  };

  return (
    <S.ForgotWrapper onClick={forgotWord}>
      <Icon type="reload" />
      <span>Forgot</span>
    </S.ForgotWrapper>
  );
};

export const WordActions: FC<{ firstWord: IWord }> = ({ firstWord }) => {
  const { id }: Pick<IWord, 'id'> = firstWord;

  return (
    <>
      <DeleteWord id={id} />
      <MemorizeWord id={id} />
      <ForgotWord id={id} />
    </>
  );
};
