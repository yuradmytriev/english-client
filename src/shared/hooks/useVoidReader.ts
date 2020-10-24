import { useEffect } from 'react';
import loadjs from 'loadjs';
import { logger } from 'shared/utils/logger';
import { useCheckVoiceReader } from 'modules/voiceReader/state/voiceReader/useCheckVoiceReader';

const voiceReaderStatuses: { success: string; error: string } = {
  success: 'Voice reader successfully downloaded!',
  error: 'Cannot download voice reader',
};

const voiceReaderURL: string =
  'https://code.responsivevoice.org/responsivevoice.js?key=8me9wqCF';

export const useVoidReader = (): void => {
  const { checkVoiceReader } = useCheckVoiceReader();

  useEffect(() => {
    const voiceReader: Promise<void> = loadjs(voiceReaderURL, {
      returnPromise: true,
    });

    if (!window.responsiveVoice) {
      voiceReader
        .then(response => {
          logger.success(voiceReaderStatuses.success);
          checkVoiceReader({ isVoiceReaderAvailable: true });

          return response;
        })
        .catch(() => {
          logger.error(voiceReaderStatuses.error);
          checkVoiceReader({ isVoiceReaderAvailable: false });
        });
    }
  }, []);
};
