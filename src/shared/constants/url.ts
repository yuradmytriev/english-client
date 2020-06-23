export const SERVER_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'https://english-m.herokuapp.com'
    : 'https://english-m.herokuapp.com';
export const FETCH_WORDS_LIST_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'https://english-m.herokuapp.com/words'
    : 'http://localhost:3008/words';
export const FETCH_WORD_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'https://english-m.herokuapp.com/word'
    : 'http://localhost:3008/word';
