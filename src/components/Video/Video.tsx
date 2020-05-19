import React, { FC, useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { jsonFetch } from 'utils/jsonFetch';
import * as S from './styles';
import { IWord } from 'interfaces/IWord';

interface IPhrases {
  text?: string;
  'video-url'?: string;
}

const useVideoSlider = (
  videos: readonly IPhrases[],
): [number, () => void, () => void, boolean, boolean] => {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  const isPreviousVideoExists: boolean = videoIndex > 0;
  const isNextVideoExists: boolean = videoIndex < videos.length - 1;

  const slideToPreviousVideo = (): void => {
    if (isPreviousVideoExists) {
      setVideoIndex(videoIndex - 1);
    }
  };

  const slideToNextVideo = (): void => {
    if (isNextVideoExists) {
      setVideoIndex(videoIndex + 1);
    }
  };

  return [
    videoIndex,
    slideToPreviousVideo,
    slideToNextVideo,
    isPreviousVideoExists,
    isNextVideoExists,
  ];
};

export const Video: FC<Pick<IWord, 'word'>> = ({ word }) => {
  const [videos, setVideos] = useState<readonly IPhrases[]>([]);

  const [
    videoIndex,
    slideToPreviousVideo,
    slideToNextVideo,
    isPreviousVideoExists,
    isNextVideoExists,
  ] = useVideoSlider(videos);

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
    </S.VideoBackground>
  );
};
