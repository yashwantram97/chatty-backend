import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('Database');
export default () => {
  const connect = async () => {
    try {
      await mongoose.connect(config.DATABASE_URL!);
      log.info('Successfully connected to the database');
    } catch (error) {
      log.error(`Error connect while database, ERROR :: ${error}`);
      return process.exit(1);
    }
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
