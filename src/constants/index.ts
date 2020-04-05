export const FETCH_WORDS_LIST_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'http://english-server.eu-central-1.elasticbeanstalk.com/words'
    : 'http://localhost:3008/words';
export const FETCH_WORD_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'http://english-server.eu-central-1.elasticbeanstalk.com/word'
    : 'http://localhost:3008/word';
