import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@react/PrimaryApp',
  // eslint-disable-next-line no-undef
  app: () => System.import('@react/PrimaryApp') as never,
  activeWhen: '/your-app-route',
});

start();
