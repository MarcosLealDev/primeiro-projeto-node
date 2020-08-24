import express from 'express';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

// app.get('/', (reqest, response) => {
//   return response.json({ message: 'Hello GoStack' });
// });

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server started on port 3333');
});
