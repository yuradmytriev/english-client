import React, { FC, useState } from 'react';
import { Button, Icon } from 'antd';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'shared/sdk/WordsSDK';
import * as S from './styles';

interface IWordCard
  extends Pick<IWord, 'id' | 'word' | 'translate' | 'context'> {
  deleteTrainingWord: (id: number) => void;
}

export const WordCard: FC<IWordCard> = ({
  id,
  word,
  translate,
  context,
  deleteTrainingWord,
}) => {
  const [showTranslate, setShowTranslate] = useState(false);

  const memoizeWord = (): void => {
    const wordProps: Pick<IWord, 'learned'> = { learned: true };

    WordsSDK.updateJSON({
      wordId: id,
      wordProps,
    });

    deleteTrainingWord(id);
  };

  const toggleTranslate = (): void => {
    setShowTranslate(prev => !prev);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.IconWordLayout>
          <S.Word>{word}</S.Word>
          <Icon
            theme="twoTone"
            type="question-circle"
            onClick={toggleTranslate}
          />
        </S.IconWordLayout>
        {showTranslate && <S.Description>{translate}</S.Description>}
        <S.Description>{context}</S.Description>

        <S.ButtonsWrapper>
          <Button onClick={memoizeWord} size="large" type="primary">
            Know
          </Button>
          <Button
            onClick={() => deleteTrainingWord(id)}
            size="large"
            type="danger"
          >
            Missed
          </Button>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.Container>
  );
};
