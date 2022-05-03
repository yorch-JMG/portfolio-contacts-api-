import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
  }),
);

export default app;
