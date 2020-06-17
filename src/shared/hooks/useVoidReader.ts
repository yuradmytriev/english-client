import { useEffect } from 'react';
import loadjs from 'loadjs';
import { logger } from 'shared/utils/logger';

const voiceReaderStatuses: { success: string; error: string } = {
  success: 'Voice reader successfully downloaded!',
  error: 'Cannot download voice reader',
};

export const useVoidReader = (): void => {
  useEffect(() => {
    const voiceReaderURL: string =
      'https://code.responsivevoice.org/responsivevoice.js?key=8me9wqCF';
    const voiceReader: Promise<void> = loadjs(voiceReaderURL, {
      returnPromise: true,
    });

    if (!window.responsiveVoice) {
      voiceReader
        .then(response => {
          logger.success(voiceReaderStatuses.success);

          return response;
        })
        .catch(() => {
          logger.error(voiceReaderStatuses.error);
        });
    }
  }, []);
};
