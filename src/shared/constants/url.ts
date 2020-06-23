export const SERVER_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'https://english-m.herokuapp.com'
    : 'http://localhost:3008';
