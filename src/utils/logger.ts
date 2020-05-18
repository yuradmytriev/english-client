interface Logger {
  success(info: string): void;
  error(error: string): void;
}

export const logger: Logger = {
  success: (info: string): void => {
    // eslint-disable-next-line no-console
    console.info(info);
  },
  error: (error: string): void => {
    // eslint-disable-next-line no-console
    console.error(error);
  },
};
