// / <reference types="mongodb" />

import path from 'path';
import process from 'process';

import mongoose, { ConnectOptions, Mongoose } from 'mongoose';

import logger from '@boilerz/logger';

const autoConnect: boolean = process.env.MONGO_DB_AUTO_CONNECT === 'true';
const defaultUri: string =
  process.env.MONGO_DB_URI ||
  `mongodb://localhost:27017/${path.basename(process.cwd())}`;

export function instance(): Mongoose {
  return mongoose;
}

export async function connect(
  uri?: string,
  options?: ConnectOptions,
): Promise<Mongoose | void> {
  if (!uri) {
    logger.warn(
      { defaultUri },
      'MONGO_DB_URI env var is not defined, a default uri will be used',
    );
  }
  const mongooseInstance = await mongoose.connect(uri || defaultUri, options);
  logger.info('[mongo-helper] ✓ Connection successful');
  return mongooseInstance;
}

export function disconnect(): Promise<void> {
  logger.info('[mongo-helper] ✓ Disconnection successful');
  return mongoose.disconnect();
}

export function dropDatabase(): Promise<void> {
  logger.info('[mongo-helper] ⚠️ Dropping database');
  return mongoose.connection.dropDatabase();
}

if (autoConnect) {
  logger.info('[mongoose-helper] Auto connecting');

  connect().catch((err: Error): void =>
    logger.error({ err }, '[mongoose-helper] Auto connect failure'),
  );
}
