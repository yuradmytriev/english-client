import { useState } from 'react';

export const useArrayCarousel = (
  children: any,
): [number, () => void, () => void, boolean, boolean] => {
  const [videoIndex, setVideoIndex] = useState<number>(0);

  const isPreviousVideoExists: boolean = videoIndex > 0;
  const isNextVideoExists: boolean = videoIndex < children.length - 1;

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
