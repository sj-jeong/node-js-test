import express from 'express';
import user from './route/user';

const app = express();

// respond with "hello world" when a GET request is made to the homepage
app
  .use('/user', user())
  .listen(8000, () => console.log('Example app listening on port 3000!'));
