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
import { useFetchWordHook } from './useFetchWordHook';
import { IWord } from 'interfaces/IWord';
import { UpdateImage } from './UpdateImage';
import { FETCH_WORDS_LIST_URL } from '../../../constants';
import * as S from './styles';

export const Word: FC = () => {
  const [isEditMode, enableEditMode] = useState<boolean>(false);

  const { word }: { word: IWord[] | null } = useFetchWordHook();

  if (!word) {
    return null;
  }

  const onUpdate = async (type: string, value: string, id: number) => {
    await fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ [type]: value }),
    });
  };

  const renderWord = ({ id, word }: Pick<IWord, 'id' | 'word'>) => (
    <>
      <S.MainWordProperty>
        {isEditMode ? (
          <S.Text
            editable={{
              onChange: (value: string) => onUpdate('word', value, id),
            }}
          >
            {word}
          </S.Text>
        ) : (
          <span>{word}</span>
        )}
      </S.MainWordProperty>
    </>
  );

  const renderTranslate = ({
    id,
    translate,
  }: Pick<IWord, 'id' | 'translate'>) => (
    <S.TranslateProperty>
      {isEditMode ? (
        <S.Text
          editable={{
            onChange: (value: string) => onUpdate('translate', value, id),
          }}
        >
          {translate}
        </S.Text>
      ) : (
        <span>{translate}</span>
      )}
    </S.TranslateProperty>
  );

  const renderContext = ({
    id,
    context,
    word,
  }: Pick<IWord, 'id' | 'context' | 'word'>) =>
    (context || isEditMode) && (
      <S.WordProperty>
        <S.WordLabel title="Context">
          {isEditMode ? (
            <S.Text
              editable={{
                onChange: (value: string) => onUpdate('context', value, id),
              }}
            >
              {context}
            </S.Text>
          ) : (
            <HighlightedPhrase phrase={context} word={word} />
          )}
        </S.WordLabel>
      </S.WordProperty>
    );

  const renderDefinition = ({
    id,
    definition,
    word,
  }: Pick<IWord, 'id' | 'definition' | 'word'>) =>
    (definition || isEditMode) && (
      <S.WordProperty>
        <S.WordLabel title="Definition">
          {isEditMode ? (
            <S.Text
              editable={{
                onChange: (value: string) => onUpdate('definition', value, id),
              }}
            >
              {definition}
            </S.Text>
          ) : (
            <span>{definition}</span>
          )}
        </S.WordLabel>
        <S.MoreExamplesWrapper>
          <MoreDefinitions word={word} />
        </S.MoreExamplesWrapper>
      </S.WordProperty>
    );

  const renderExample = ({
    id,
    example,
    word,
  }: Pick<IWord, 'id' | 'example' | 'word'>) =>
    (example || isEditMode) && (
      <S.WordProperty>
        <S.WordLabel title="Example">
          {isEditMode ? (
            <S.Text
              editable={{
                onChange: (value: string) => onUpdate('example', value, id),
              }}
            >
              {example}
            </S.Text>
          ) : (
            <HighlightedPhrase phrase={example} word={word} />
          )}
        </S.WordLabel>
        <S.MoreExamplesWrapper>
          <MoreExamples word={word} />
        </S.MoreExamplesWrapper>
      </S.WordProperty>
    );

  const renderSynonym = ({
    synonym,
    word,
  }: Pick<IWord, 'synonym' | 'word'>) =>
    (synonym || isEditMode) && (
      <S.WordProperty>
        <Suggestion
          isEditMode={isEditMode}
          title="synonym"
          word={synonym || isEditMode}
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
                  {renderSynonym({ synonym, word })}

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
