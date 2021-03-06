import path from 'path';
import dotenv from 'dotenv';

const config = dotenv.config({
  path: path.join(__dirname, '..', '.env'),
});

if (config.parsed == undefined) {
  throw new Error('parsing 실패 시 Throwing');
}

export const env = {
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  },
};
