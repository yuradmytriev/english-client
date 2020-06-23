export const SERVER_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'http://english-server.eu-central-1.elasticbeanstalk.com'
    : 'https://english-m.herokuapp.com';
export const FETCH_WORDS_LIST_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'http://english-server.eu-central-1.elasticbeanstalk.com/words'
    : 'https://english-m.herokuapp.com/words';
export const FETCH_WORD_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'http://english-server.eu-central-1.elasticbeanstalk.com/word'
    : 'https://english-m.herokuapp.com/word';
