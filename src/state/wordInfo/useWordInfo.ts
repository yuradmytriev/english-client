import { useDispatch, useSelector } from 'react-redux';
import { toggleWordInfoAction } from './actions';

export const useWordInfo = () => {
  const dispatch = useDispatch();

  const wordInfo = useSelector((state: any) => state.wordInfo);

  const toggleWordInfo = (): void => {
    dispatch(toggleWordInfoAction());
  };

  return { toggleWordInfo, wordInfo };
};
