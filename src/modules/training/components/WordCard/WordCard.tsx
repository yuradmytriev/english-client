import React, { FC, useState } from 'react';
import { IWord } from 'interfaces/IWord';
import { WordsSDK } from 'sdk/WordsSDK';
import * as S from '../../page/styles';
import { Button, Icon } from 'antd';

interface IWordCard
  extends Pick<IWord, 'id' | 'word' | 'translate' | 'context'> {
  removeTrainingWord: (id: number) => void;
}

export const WordCard: FC<IWordCard> = ({
  id,
  word,
  translate,
  context,
  removeTrainingWord,
}) => {
  const [showTranslate, setShowTranslate] = useState(false);

  const handleMemoized = (id: number): void => {
    const wordProps: Pick<IWord, 'learned'> = { learned: true };

    WordsSDK.updateJSON({
      wordId: id,
      wordProps,
    });

    removeTrainingWord(id);
  };

  const toggleTranslate = () => {
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
          <Button
            onClick={() => handleMemoized(id)}
            size="large"
            type="primary"
          >
            Know
          </Button>
          <Button
            onClick={() => removeTrainingWord(id)}
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
