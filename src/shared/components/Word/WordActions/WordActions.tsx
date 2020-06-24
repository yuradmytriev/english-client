import React, { FC, MouseEvent } from 'react';
import Icon from 'antd/lib/icon';
import { IWord } from 'shared/interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import { useFetchWordsOffset } from 'shared/state/fetchWordsOffset/useFetchWordsOffset';
import * as S from '../styles';

const DeleteWord: FC<{ id: number }> = ({ id }) => {
  const { fetchWordsOffset, deleteWordsOffset } = useFetchWordsOffset();

  const deleteWord = async (
    e: MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.stopPropagation();
    const deletedWord: boolean = await WordsSDK.delete(id);

    if (deletedWord) {
      fetchWordsOffset(0);
      deleteWordsOffset(id);
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
  const { fetchWordsOffset } = useFetchWordsOffset();

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
      fetchWordsOffset(0);
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
  const { fetchWordsOffset } = useFetchWordsOffset();

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
      fetchWordsOffset(0);
    }
  };

  return (
    <S.ForgotWrapper onClick={forgotWord}>
      <Icon type="reload" />
      <span>Forgot</span>
    </S.ForgotWrapper>
  );
};

export const WordActions: FC<{ wordInfo: IWord }> = ({ wordInfo }) => {
  const { id }: Pick<IWord, 'id'> = wordInfo;

  return (
    <>
      <DeleteWord id={id} />
      <MemorizeWord id={id} />
      <ForgotWord id={id} />
    </>
  );
};
