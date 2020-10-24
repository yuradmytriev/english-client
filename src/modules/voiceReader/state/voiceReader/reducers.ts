import { IS_VOICE_READER_AVAILABLE } from './types';

export const voiceReaderReducer = (
  initialState: boolean,
  { type, isVoiceReaderAvailable },
) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case IS_VOICE_READER_AVAILABLE:
      return isVoiceReaderAvailable;
    default:
      return initialState;
  }
};
