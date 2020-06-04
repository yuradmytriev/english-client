import { Carousel as AntdCarousel } from 'antd';
import React, { FC, MutableRefObject, ReactNode, useRef } from 'react';
import * as S from 'pages/Word/styles';

export const Carousel: FC = ({ children }: { children?: ReactNode }) => {
  const carouselRef: MutableRefObject<
    AntdCarousel | null | undefined
  > = useRef();

  const slideLeft = (): void => {
    if (carouselRef?.current) {
      carouselRef.current.prev();
    }
  };

  const slideRight = (): void => {
    if (carouselRef?.current) {
      carouselRef.current.next();
    }
  };

  return (
    <>
      <S.ArrowLeft type="left" onClick={slideLeft} />
      <AntdCarousel ref={carouselRef as MutableRefObject<AntdCarousel>}>
        {children}
      </AntdCarousel>
      <S.ArrowRight type="right" onClick={slideRight} />
    </>
  );
};
