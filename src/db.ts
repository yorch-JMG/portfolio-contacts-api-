import {DataSource} from 'typeorm';
import {DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PW} from './config';
import {Contacts} from './entities/Contacts';

export const AppDataSource = new DataSource({
  type: 'mysql',
  database: DB_NAME,
  username: DB_USER,
  password: DB_PW,
  host: DB_HOST,
  port: +DB_PORT!,
  synchronize: true,
  entities: [Contacts],
  ssl: false,
});
