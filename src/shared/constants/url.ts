export const SERVER_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'https://english-m.herokuapp.com'
    : 'http://3.120.210.76:8081';
