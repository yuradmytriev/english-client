import React, { FC, ReactNode, DragEvent } from 'react';

interface IDraggable {
  id: string;
  children: ReactNode;
}

export const Draggable: FC<IDraggable> = ({ id, children }) => {
  const onDragStart = (event: DragEvent<HTMLDivElement>): void => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('id', id);
    }
  };

  return (
    <div draggable onDragStart={onDragStart}>
      {children}
    </div>
  );
};
