import { useState } from 'react';

export const useForms = (): readonly [number[], () => void] => {
  const INITIAL_INDEX: number = 1;
  const [forms, addForm] = useState<number[]>([INITIAL_INDEX]);

  const appendForm = (): void => {
    // eslint-disable-next-line no-magic-numbers
    addForm((prev: number[]) => [...prev, prev[prev.length - 1] + 1]);
  };

  return [forms, appendForm];
};
