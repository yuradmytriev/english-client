import React, { FC, useState } from 'react';
import { Video } from 'components/Video';
import { Carousel } from 'components/Carousel';
import { Frequency } from 'components/Frequency';
import { Navigation } from 'components/Navigation';
import { Suggestion } from 'components/Suggestion';
import { MoreExamples } from 'components/MoreExamples';
import { MoreDefinitions } from 'components/MoreDefinitions';
import { WordPronunciation } from 'components/WordPronunciation';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { WordsSDK } from 'sdk/WordsSDK';
import { ifElse } from 'utils/ifElse';
import { useFetchWordHook } from './useFetchWordHook';
import { IWord } from 'interfaces/IWord';
import { UpdateImage } from './UpdateImage';
import * as S from './styles';

export const Word: FC = () => {
  const [isEditMode, enableEditMode] = useState<boolean>(false);

  const { word }: { word: IWord[] | null } = useFetchWordHook();

  if (!word) {
    return null;
  }

  const onUpdate = (type: string, value: string, id: number): void => {
    const wordProps: Partial<IWord> = { [type]: value };

    WordsSDK.updateJSON({ wordId: id, wordProps });
  };

  const renderWord = ({ id, word }: Pick<IWord, 'id' | 'word'>) => {
    const onChange = (value: string): void => onUpdate('word', value, id);

    return (
      <>
        <S.MainWordProperty>
          {ifElse(
            isEditMode,
            <S.Text editable={{ onChange }}>{word}</S.Text>,
            <span>{word}</span>,
          )}
        </S.MainWordProperty>
      </>
    );
  };

  const renderTranslate = ({
    id,
    translate,
  }: Pick<IWord, 'id' | 'translate'>) => {
    const onChange = (value: string): void => onUpdate('translate', value, id);

    return (
      <S.TranslateProperty>
        {ifElse(
          isEditMode,
          <S.Text editable={{ onChange }}>{translate}</S.Text>,
          <span>{translate}</span>,
        )}
      </S.TranslateProperty>
    );
  };

  const renderContext = ({
    id,
    context,
    word,
  }: Pick<IWord, 'id' | 'context' | 'word'>) => {
    if (!context) {
      return null;
    }

    const onChange = (value: string): void => onUpdate('context', value, id);

    return (
      <S.WordProperty>
        <S.WordLabel title="Context">
          {ifElse(
            isEditMode,
            <S.Text editable={{ onChange }}>{context}</S.Text>,
            <HighlightedPhrase phrase={context} word={word} />,
          )}
        </S.WordLabel>
      </S.WordProperty>
    );
  };

  const renderDefinition = ({
    id,
    definition,
    word,
  }: Pick<IWord, 'id' | 'definition' | 'word'>) => {
    if (!definition) {
      return null;
    }

    const onChange = (value: string) => onUpdate('definition', value, id);

    return (
      <S.WordProperty>
        <S.WordLabel title="Definition">
          {ifElse(
            isEditMode,
            <S.Text editable={{ onChange }}>{definition}</S.Text>,
            <span>{definition}</span>,
          )}
        </S.WordLabel>
        <S.MoreExamplesWrapper>
          <MoreDefinitions word={word} />
        </S.MoreExamplesWrapper>
      </S.WordProperty>
    );
  };

  const renderExample = ({
    id,
    example,
    word,
  }: Pick<IWord, 'id' | 'example' | 'word'>) => {
    if (!example) {
      return null;
    }

    const onChange = (value: string) => onUpdate('example', value, id);

    return (
      <S.WordProperty>
        <S.WordLabel title="Example">
          {ifElse(
            isEditMode,
            <S.Text editable={{ onChange }}>{example}</S.Text>,
            <HighlightedPhrase phrase={example} word={word} />,
          )}
        </S.WordLabel>
        <S.MoreExamplesWrapper>
          <MoreExamples word={word} />
        </S.MoreExamplesWrapper>
      </S.WordProperty>
    );
  };

  const renderSynonym = ({
    id,
    synonym,
    word,
  }: Pick<IWord, 'id' | 'synonym' | 'word'>) =>
    synonym && (
      <S.WordProperty>
        <Suggestion
          id={id}
          word={synonym}
          type="synonym"
          isEditMode={isEditMode}
          originalWord={word}
        />
      </S.WordProperty>
    );

  return (
    <>
      <Carousel>
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

                  {renderWord({ id, word })}
                  {renderTranslate({ id, translate })}
                  {renderContext({ id, context, word })}
                  {renderDefinition({ id, definition, word })}
                  {renderExample({ id, example, word })}
                  {renderSynonym({ id, synonym, word })}

                  <Video word={word} />
                </S.WordWrapper>
              </S.WordPage>
            </div>
          ),
        )}
      </Carousel>
      <Navigation enableEditMode={enableEditMode} />
    </>
  );
};
