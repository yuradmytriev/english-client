import React, { FC, DragEvent, ReactNode } from 'react';
import * as S from './styles';

interface IDropContainer {
  children: ReactNode;
  onDropEnd: (id: string, categoryId: string) => void;
}

export const DropContainer: FC<IDropContainer> = ({ children, onDropEnd }) => {
  const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
    const id: string = event.dataTransfer.getData('id');
    const categoryId: string | undefined = event.dataTransfer.getData(
      'categoryId',
    );

    onDropEnd(id, categoryId);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  return (
    <S.DropContainer onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </S.DropContainer>
  );
};
