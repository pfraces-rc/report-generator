import chalk from 'chalk';

const statusColor = (status) => {
  if (status >= 500) {
    return 'red';
  }

  if (status >= 400) {
    return 'yellow';
  }

  if (status >= 300) {
    return 'cyan';
  }

  return 'green';
};

const methodColor = (method) => {
  const methods = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'cyan',
    DELETE: 'red',
    OPTIONS: 'magenta'
  };

  return methods[method];
};

export const logFormatter = (tokens, req, res) => {
  const status = tokens.status(req, res);
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const responseTime = tokens['response-time'](req, res);

  return [
    chalk[statusColor(status)].bold(status),
    chalk[methodColor(method)].bold(method),
    chalk.white(url),
    chalk.gray(`${responseTime} ms`)
  ].join(' ');
};
