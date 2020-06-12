import React, { FC, ReactNode, DragEvent } from 'react';

interface IDraggable {
  id: string;
  children: ReactNode;
  categoryId?: number;
}

export const Draggable: FC<IDraggable> = ({ id, children, categoryId }) => {
  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    if (!event.dataTransfer) {
      return null;
    }

    event.dataTransfer.setData('id', id);

    if (categoryId) {
      event.dataTransfer.setData('categoryId', String(categoryId));
    }

    return null;
  };

  return (
    <div draggable onDragStart={onDragStart}>
      {children}
    </div>
  );
};
