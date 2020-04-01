import React, { FC, useEffect, useState } from 'react';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { HighlightedPhrase } from 'components/HighlightedPhrase';
import * as S from './styles';

export const Video: FC<{ word: string }> = ({ word }) => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState(0);

  useEffect(() => {
    fetch(`https://www.playphrase.me/api/v1/phrases/search?q=${word}`)
      .then(response => response.json())
      .then(videoList => setVideos(videoList));
  }, []);

  const phrases = get(videos, 'phrases', []);

  const isPreviousVideoExists = videoId > 0;
  const isNextVideoExists = videoId < phrases.length - 1;

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

  return !isEmpty(phrases) ? (
    <>
      <S.VideoWrapper>
        <S.Arrow
          disabled={!isPreviousVideoExists}
          type="left"
          onClick={handlePreviousVideo}
        />

        <S.VideoContainer>
          <S.Video src={phrases[videoId]['video-url']} controls />
        </S.VideoContainer>

        <S.Arrow
          disabled={!isNextVideoExists}
          type="right"
          onClick={handleNextVideo}
        />
      </S.VideoWrapper>
      <HighlightedPhrase phrase={phrases[videoId].text} word={word} />
    </>
  ) : null;
};
