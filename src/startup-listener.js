import chalk from 'chalk';
import { getLanIp } from '#src/utils/network.js';

export const startupListener = (port) => {
  const { npm_package_name, npm_package_version } = process.env;
  const name = chalk.green.bold(npm_package_name);
  const version = chalk.green('v' + npm_package_version);

  const localUrl = chalk.cyan(`http://localhost:${chalk.bold(port)}/`);
  const networkUrl = chalk.cyan(`http://${getLanIp()}:${chalk.bold(port)}/`);

  return () => {
    const serverUptime = Math.round(process.uptime() * 1000);
    const uptime = chalk.white(`${serverUptime} ms`);

    const startupMessage = [
      '',
      `  ${name} ${version}  ready in ${uptime}`,
      '',
      `  ${chalk.green('➜')}  ${chalk.white('Local:')}   ${localUrl}`,
      `  ${chalk.green('➜')}  ${chalk.white('Network:')} ${networkUrl}`
    ].join('\n');

    console.log(chalk.grey(startupMessage));
  };
};
