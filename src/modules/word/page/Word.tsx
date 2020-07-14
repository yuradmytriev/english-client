import React, { FC } from 'react';
import { Carousel } from 'shared/components/Carousel';
import { Frequency } from 'shared/components/Frequency';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { IWord } from 'shared/interfaces/IWord';
import { useFetchWord } from '../hooks/useFetchWord';
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
import {WordsSDK} from "../../../shared/sdk/WordsSDK";

const Undraft = ({ id }) => {
  const onClick = (): void => {
    WordsSDK.undraft(id);
  };

  return (<div onClick={onClick}>Undraft</div>)
}

export const Word: FC = () => {
  const { isEditMode } = useEditMode();
  const { word }: { word: IWord[] | null } = useFetchWord();

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
                      <WordPronunciation word={word} />
                    </S.WordPronunciationWrapper>
                  </S.ImageWithFrequency>

                  <WordText id={id} word={word} />
                  <Translate id={id} translate={translate} />
                  <Context id={id} word={word} context={context} />
                  <Definition id={id} definition={definition} word={word} />
                  <Example id={id} example={example} word={word} />
                  <Synonym id={id} word={word} synonym={synonym} />

                  <Video word={word} />

                  {isEditMode && <Undraft id={id} />}
                </S.WordWrapper>
              </S.WordPage>
            </div>
          ),
        )}
      </Carousel>
      <Navigation />
    </>
  );
};
