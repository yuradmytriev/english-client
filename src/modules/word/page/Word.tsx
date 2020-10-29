import React, { FC } from 'react';
import { IWord } from 'shared/interfaces/IWord';
import { Carousel } from 'shared/components/Carousel';
import { Frequency } from 'shared/components/Frequency';
import { useFetchWord } from 'modules/word/hooks/useFetchWord';
import { useDisableEditMode } from 'modules/word/hooks/useDisableEditMode';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { useCheckVoiceReader } from 'modules/voiceReader/state/voiceReader/useCheckVoiceReader';
import {
  Example,
  Context,
  Synonym,
  WordText,
  Translate,
  Navigation,
  Definition,
  UpdateImage,
  UndraftButton,
  WordPronunciation,
} from 'modules/word/components';
import * as S from './styles';

export const Word: FC = () => {
  useDisableEditMode();
  const { isEditMode } = useEditMode();
  const { isVoiceReaderAvailable } = useCheckVoiceReader();

  // TODO: should be 'words'
  const { word, updateWord }: { word: IWord[] | null } = useFetchWord();

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
