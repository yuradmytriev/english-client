import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'shared/interfaces/IState';
import { checkVoiceReaderAction } from './actions';

export const useCheckVoiceReader = () => {
  const dispatch = useDispatch();

  const isVoiceReaderAvailable = useSelector(
    (state: IState) => state.isVoiceReaderAvailable,
  );

  const checkVoiceReader = ({ isVoiceReaderAvailable }): void => {
    dispatch(checkVoiceReaderAction({ isVoiceReaderAvailable }));
  };

  return { checkVoiceReader, isVoiceReaderAvailable };
};
