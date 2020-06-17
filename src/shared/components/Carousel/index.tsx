import { Carousel as AntdCarousel } from 'antd';
import React, { FC, MutableRefObject, ReactNode, useRef } from 'react';
import { useArrayCarousel } from 'shared/hooks/useArrayCarousel';
import * as S from 'pages/Word/styles';

interface ICarousel {
  children?: ReactNode;
  dots: boolean;
}

export const Carousel: FC<ICarousel> = ({ children, dots }) => {
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
    // eslint-disable-next-line no-unused-expressions
    carouselRef?.current?.prev();
    slideToPreviousVideo();
  };

  const slideToNext = (): void => {
    // eslint-disable-next-line no-unused-expressions
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
        dots={dots}
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
