import { Carousel as AntdCarousel } from 'antd';
import React, { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { useArrayCarousel } from 'hooks/useArrayCarousel';
import * as S from 'pages/Word/styles';

export const Carousel: FC = ({ children }: { children?: ReactNode }) => {
  const carouselRef: MutableRefObject<
    AntdCarousel | null | undefined
  > = useRef();

  const [
    _,
    slideToPreviousVideo,
    slideToNextVideo,
    isPreviousVideoExists,
    isNextVideoExists,
  ] = useArrayCarousel(children);

  const slideToPrev = (): void => {
    carouselRef?.current?.prev();
    slideToPreviousVideo();
  };

  const slideToNext = (): void => {
    carouselRef?.current?.next();
    slideToNextVideo();
  };

  const isSliderMode: boolean = children?.length > 1;

  return (
    <>
      {isSliderMode && (
        <S.ArrowLeft
          disabled={!isPreviousVideoExists}
          type="left"
          onClick={slideToPrev}
        />
      )}
      <AntdCarousel
        infinite={false}
        ref={carouselRef as MutableRefObject<AntdCarousel>}
      >
        {children}
      </AntdCarousel>
      {isSliderMode && (
        <S.ArrowRight
          disabled={!isNextVideoExists}
          type="right"
          onClick={slideToNext}
        />
      )}
    </>
  );
};
