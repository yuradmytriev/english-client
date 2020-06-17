import React, { FC, useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { jsonFetch } from 'shared/utils/jsonFetch';
import { IWord } from 'shared/interfaces/IWord';
import { useArrayCarousel } from 'shared/hooks/useArrayCarousel';
import { HighlightedPhrase } from 'shared/components/HighlightedPhrase';
import * as S from './styles';

interface IPhrases {
  text?: string;
  'video-url'?: string;
}

export const Video: FC<Pick<IWord, 'word'>> = ({ word }) => {
  const [videos, setVideos] = useState<readonly IPhrases[]>([]);

  const [
    videoIndex,
    slideToPreviousVideo,
    slideToNextVideo,
    isPreviousVideoExists,
    isNextVideoExists,
  ] = useArrayCarousel(videos);

  useEffect(() => {
    const createVideoByWordURL: string = `https://www.playphrase.me/api/v1/phrases/search?q=${word}`;

    jsonFetch(createVideoByWordURL)
      .then((videoList: { phrases: readonly IPhrases[] }) => {
        setVideos(videoList?.phrases);

        return videoList;
      })
      .catch(e => e);
  }, []);

  if (isEmpty(videos)) {
    return null;
  }

  const videoURL: string | undefined = videos[videoIndex]['video-url'];
  const videoSubtitles: string | undefined = videos[videoIndex]?.text;

  return (
    <S.VideoBackground>
      <div>
        <S.VideoWrapper>
          <S.Arrow
            type="left"
            onClick={slideToPreviousVideo}
            disabled={isPreviousVideoExists}
          />
          <S.VideoContainer>
            <S.Video src={videoURL} controls />
          </S.VideoContainer>

          <S.Arrow
            type="right"
            onClick={slideToNextVideo}
            disabled={isNextVideoExists}
          />
        </S.VideoWrapper>
        <HighlightedPhrase phrase={videoSubtitles} word={word} />
      </div>
    </S.VideoBackground>
  );
};
