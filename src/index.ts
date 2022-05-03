import app from './app';
import {PORT} from './config';
import {AppDataSource} from './db';

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen(PORT);
    console.log('Server started successfuly!');
  } catch (e) {
    console.error(e);
  }
}

main();
