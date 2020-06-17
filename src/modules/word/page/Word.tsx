import React, { FC } from 'react';
import { Carousel } from 'shared/components/Carousel';
import { Frequency } from 'shared/components/Frequency';
import { useEditMode } from 'modules/word/state/editMode/useEditMode';
import { IWord } from 'interfaces/IWord';
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

                  {word && <WordText id={id} word={word} />}
                  {translate && <Translate id={id} translate={translate} />}
                  {context && <Context id={id} word={word} context={context} />}
                  {definition && (
                    <Definition id={id} definition={definition} word={word} />
                  )}
                  {example && <Example id={id} example={example} word={word} />}
                  {synonym && <Synonym id={id} word={word} synonym={synonym} />}

                  <Video word={word} />
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
