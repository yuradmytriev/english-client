import { IS_VOICE_READER_AVAILABLE } from './types';

export const checkVoiceReaderAction = ({ isVoiceReaderAvailable }) => ({
  type: IS_VOICE_READER_AVAILABLE,
  isVoiceReaderAvailable,
});
