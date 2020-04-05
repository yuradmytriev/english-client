export const SERVER_URL: string =
  process.env.NODE_ENV === 'production'
    ? 'http://english-server.eu-central-1.elasticbeanstalk.com'
    : 'http://localhost:3008';
