import React, { FC, useEffect, useState } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import { ifElse } from 'utils/ifElse';
import * as S from './styles';

const createVideoByWordURL = (word: string): string =>
  `https://www.playphrase.me/api/v1/phrases/search?q=${word}`;

export const Video: FC<{ word: string }> = ({ word }) => {
  const [videos, setVideos] = useState<string[]>([]);

  const initialVideoIndex: number = 0;
  const [videoId, setVideoId] = useState(initialVideoIndex);

  useEffect(() => {
    fetch(createVideoByWordURL(word))
      .then((response: Response) => response.json())
      .then((videoList: { phrases: string[] }) => {
        setVideos(videoList?.phrases);

        return videoList;
      });
  }, []);

  const isPreviousVideoExists = videoId > 0;
  const isNextVideoExists = videoId < videos.length - 1;

  const handlePreviousVideo = () => {
    if (isPreviousVideoExists) {
      setVideoId(videoId - 1);
    }
  };

  const handleNextVideo = () => {
    if (isNextVideoExists) {
      setVideoId(videoId + 1);
    }
  };

  if (!isEmpty(videos)) {
    return null;
  }

  return (
    <S.VideoBackground>
      <S.VideoWrapper>
        <S.Arrow type="left" onClick={handlePreviousVideo} />
        <S.VideoContainer>
          <S.Video src={videos[videoId]['video-url']} controls />
        </S.VideoContainer>

        <S.Arrow type="right" onClick={handleNextVideo} />
      </S.VideoWrapper>
      <HighlightedPhrase phrase={videos[videoId]?.text} word={word} />
    </S.VideoBackground>
  );
};
