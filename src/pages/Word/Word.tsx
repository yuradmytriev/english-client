import React, { FC } from 'react';
import { Video } from 'components/Video';
import { Carousel } from 'components/Carousel';
import { Frequency } from 'components/Frequency';
import { Navigation } from 'components/Navigation';
import { WordPronunciation } from 'components/WordPronunciation';
import { useEditMode } from 'state/editMode/useEditMode';
import { IWord } from 'interfaces/IWord';
import { useFetchWordHook } from './useFetchWordHook';
import { UpdateImage } from './UpdateImage';
import { Word as WordText } from './Word/Word';
import { Synonym } from './Synonym';
import { Context } from './Context';
import { Example } from './Example';
import { Translate } from './Translate';
import { Definition } from './Definition';
import * as S from './styles';

export const Word: FC = () => {
  const { isEditMode } = useEditMode();
  const { word }: { word: IWord[] | null } = useFetchWordHook();

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
