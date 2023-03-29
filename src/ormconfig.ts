import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'
import {TagEntity} from './tag/tag.entity'

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize:true
};

export default config;