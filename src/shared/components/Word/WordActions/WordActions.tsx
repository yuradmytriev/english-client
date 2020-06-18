import React, { FC, MouseEvent } from 'react';
import { Icon } from 'antd';
import { IWord } from 'shared/interfaces/IWord';
import {
  useFetchWords,
  IUseFetchWords,
} from 'shared/state/fetchWords/useFetchWords';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import * as S from '../styles';

const DeleteWord: FC<{ id: number }> = ({ id }) => {
  const { fetchWords }: IUseFetchWords = useFetchWords();

  const deleteWord = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.stopPropagation();
    const deletedWord: boolean = await WordsSDK.delete(id);

    if (deletedWord) {
      fetchWords();
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
  const { fetchWords } = useFetchWords();

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
      fetchWords();
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
  const { fetchWords } = useFetchWords();

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
      fetchWords();
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
