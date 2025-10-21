import { networkInterfaces } from 'node:os';

export const getLanIp = () => {
  const [iface] = Object.values(networkInterfaces())
    .flat()
    .filter(({ family, internal }) => family === 'IPv4' && !internal);

  return iface?.address;
};
