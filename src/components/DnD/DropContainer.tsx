import React, { FC, DragEvent, ReactNode } from 'react';

interface IDropContainer {
  children: ReactNode;
  onDropEnd: (id: string) => void;
}

export const DropContainer: FC<IDropContainer> = ({ children, onDropEnd }) => {
  const handleDrop = (event: DragEvent<HTMLDivElement>): void => {
    const id: string = event.dataTransfer.getData('id');
    onDropEnd(id);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </div>
  );
};
