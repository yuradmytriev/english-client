import { useEffect, useState } from 'react';
import { jsonFetch } from 'shared/utils/jsonFetch';

export const useFetchToState = (url: string) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    jsonFetch(url).then(setState);
  });

  return [state];
};
