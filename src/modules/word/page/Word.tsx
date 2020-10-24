import React, { FC } from 'react';
import { Button } from 'antd';
import { Carousel } from 'shared/components/Carousel';
import { Frequency } from 'shared/components/Frequency';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { IWord } from 'shared/interfaces/IWord';
import { useFetchWord } from '../hooks/useFetchWord';
import { WordsSDK } from '../../../shared/sdk/WordsSDK';
import {
  Video,
  Example,
  Context,
  Synonym,
  WordText,
  Translate,
  Navigation,
  Definition,
  UpdateImage,
  WordPronunciation,
} from '../components';
import * as S from './styles';
import { useCheckVoiceReader } from 'modules/voiceReader/state/voiceReader/useCheckVoiceReader';

const UndraftButton = ({ id }) => {
  const onClick = (): void => {
    WordsSDK.undraft(id);
  };

  return (
    <Button type="primary" onClick={onClick}>
      Undraft
    </Button>
  );
};

export const Word: FC = () => {
  const { isEditMode } = useEditMode();
  const { word, updateWord }: { word: IWord[] | null } = useFetchWord();
  const { isVoiceReaderAvailable } = useCheckVoiceReader();

  if (!word) {
    return null;
  }

  return (
    <>
      <Carousel dots={false}>
        {word.map(
          ({
            id,
            word,
            translate,
            definition,
            context,
            example,
            synonym,
            imageSrc,
          }) => (
            <div key={id}>
              <S.WordPage>
                <S.WordWrapper>
                  <S.ImageWithFrequency>
                    <S.Image src={imageSrc} alt={word} />
                    {isEditMode && <UpdateImage id={id} />}

                    <S.FrequencyWrapper>
                      <Frequency showTitle word={word} />
                    </S.FrequencyWrapper>

                    <S.WordPronunciationWrapper>
                      {isVoiceReaderAvailable && (
                        <WordPronunciation word={word} />
                      )}
                    </S.WordPronunciationWrapper>
                  </S.ImageWithFrequency>

                  <WordText id={id} word={word} />
                  <Translate id={id} translate={translate} />
                  <Definition id={id} definition={definition} word={word} />
                  <Context id={id} word={word} context={context} />
                  <Example id={id} example={example} word={word} />
                  <Synonym id={id} word={word} synonym={synonym} />

                  <Video word={word} />

                  <br />
                  {isEditMode && <UndraftButton id={id} />}
                </S.WordWrapper>
              </S.WordPage>
            </div>
          ),
        )}
      </Carousel>
      <Navigation updateWord={updateWord} />
    </>
  );
};
