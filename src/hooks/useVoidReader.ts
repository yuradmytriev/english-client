import { useEffect } from 'react';
import loadjs from 'loadjs';
import { logger } from 'utils/logger';

const voiceReaderURL: string =
  'https://code.responsivevoice.org/responsivevoice.js?key=8me9wqCF';

const voiceReaderStatuses: { success: string; error: string } = {
  success: 'Voice reader successfully downloaded!',
  error: 'Cannot download voice reader',
};

export const useVoidReader = (): void => {
  useEffect(() => {
    const voiceReader: Promise<void> = loadjs(voiceReaderURL, {
      returnPromise: true,
    });

    voiceReader
      .then(() => {
        logger.success(voiceReaderStatuses.success);

        return true;
      })
      .catch(() => {
        logger.error(voiceReaderStatuses.error);
      });
  });
};
