import morgan from 'morgan';
import { logFormatter } from './log-formatter.js';

export const requestLogger = ({ skipOptionsMethod = false } = {}) => {
  return morgan(logFormatter, {
    skip: (req) => {
      if (skipOptionsMethod) {
        return req.method === 'OPTIONS';
      }

      return false;
    }
  });
};
