import React, { useEffect, FC, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'antd';
import { Video } from 'components/Video';
import { Frequency } from 'components/Frequency';
import { Navigation } from 'components/Navigation';
import { Suggestion } from 'components/Suggestion';
import { MoreExamples } from 'components/MoreExamples';
import { MoreDefinitions } from 'components/MoreDefinitions';
import { WordPronunciation } from 'components/WordPronunciation';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { FETCH_WORD_URL, FETCH_WORDS_LIST_URL } from '../../constants';
import * as S from './styles';

interface IWord {
  word: string;
  translate: string;
  definition?: string;
  context?: string;
  example?: string;
  synonym?: string;
  antonym?: string;
  imageSrc: string;
}

const ImageUpdate: FC<IFileInput> = ({ id }) => {
  const setFileToForm = (inputData: ChangeEvent<HTMLInputElement>): void => {
    const formData: FormData = new FormData();
    formData.append('imageSrc', inputData.target.files[0]);

    fetch(`${FETCH_WORDS_LIST_URL}/${id}`, {
      method: 'PUT',
      body: formData,
    });
  };

  return (
    <>
      <S.Input
        type="file"
        id="imageSrc"
        name="imageSrc"
        onChange={setFileToForm}
      />
      <S.ImageUpdate htmlFor="imageSrc">
        <span>Update image</span>
      </S.ImageUpdate>
    </>
  );
};

export const Word: FC = () => {
  const { wordName } = useParams();
  const ref = React.useRef();

  const [fetchedWord, setWord] = useState<IWord | null>(null);
  const [isEditMode, enableEditMode] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${FETCH_WORD_URL}/by-text/${wordName}`);
      const word: IWord = await response.json();

      setWord(word);
    })();
  }, []);

  if (!fetchedWord) {
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

  return fetchedWord ? (
    <>
      <S.ArrowLeft
        disabled={false}
        type="left"
        onClick={() => ref.current.prev()}
      />
      <Carousel ref={ref}>
        {fetchedWord.map(
          ({
            id,
            word,
            translate,
            definition,
            context,
            example,
            synonym,
            antonym,
            imageSrc,
          }) => (
            <div key={id}>
              <S.WordPage>
                <S.WordWrapper>
                  <S.ImageWithFrequency>
                    <S.Image src={imageSrc} alt={word} />
                    {isEditMode && <ImageUpdate id={id} />}
                    <S.FrequencyWrapper>
                      <Frequency showTitle word={word} />
                    </S.FrequencyWrapper>
                    <S.WordPronunciationWrapper>
                      <WordPronunciation word={word} />
                    </S.WordPronunciationWrapper>
                  </S.ImageWithFrequency>

                  <S.MainWordProperty>
                    {isEditMode ? (
                      <S.Text
                        editable={{
                          onChange: (value: string) =>
                            onUpdate('word', value, id),
                        }}
                      >
                        {word}
                      </S.Text>
                    ) : (
                      <span>{word}</span>
                    )}
                  </S.MainWordProperty>

                  <S.TranslateProperty>
                    {isEditMode ? (
                      <S.Text
                        editable={{
                          onChange: (value: string) =>
                            onUpdate('translate', value, id),
                        }}
                      >
                        {translate}
                      </S.Text>
                    ) : (
                      <span>{translate}</span>
                    )}
                  </S.TranslateProperty>

                  {(context || isEditMode) && (
                    <S.WordProperty>
                      <S.WordLabel title="Context">
                        {isEditMode ? (
                          <S.Text
                            editable={{
                              onChange: (value: string) =>
                                onUpdate('context', value, id),
                            }}
                          >
                            {context}
                          </S.Text>
                        ) : (
                          <HighlightedPhrase phrase={context} word={word} />
                        )}
                      </S.WordLabel>
                    </S.WordProperty>
                  )}

                  {(definition || isEditMode) && (
                    <S.WordProperty>
                      <S.WordLabel title="Definition">
                        {isEditMode ? (
                          <S.Text
                            editable={{
                              onChange: (value: string) =>
                                onUpdate('definition', value, id),
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
                  )}

                  {(example || isEditMode) && (
                    <S.WordProperty>
                      <S.WordLabel title="Example">
                        {isEditMode ? (
                          <S.Text
                            editable={{
                              onChange: (value: string) =>
                                onUpdate('example', value, id),
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
                  )}

                  {(synonym || isEditMode) && (
                    <S.WordProperty>
                      <Suggestion
                        isEditMode={isEditMode}
                        title="synonym"
                        word={synonym || isEditMode}
                        originalWord={word}
                      />
                    </S.WordProperty>
                  )}

                  {(antonym || isEditMode) && (
                    <S.WordProperty>
                      <Suggestion
                        isEditMode={isEditMode}
                        title="antonym"
                        word={antonym || isEditMode}
                        originalWord={word}
                      />
                    </S.WordProperty>
                  )}

                  <Video word={word} />
                </S.WordWrapper>
              </S.WordPage>
            </div>
          ),
        )}
      </Carousel>
      <S.ArrowRight
        disabled={false}
        type="right"
        onClick={() => ref.current.next()}
      />
      <Navigation enableEditMode={enableEditMode} />
    </>
  ) : null;
};
