import { registerApplication, start } from 'single-spa';

export type TLocation = {
  pathname: string;
};

export function navbar(): boolean {
  return true; // The navbar is always active
}

export function employees(location: TLocation): boolean {
  return location.pathname === '/employees';
}

export function employeeDetails(location: TLocation) {
  const regex = /^\/employees\/\d+?$/;

  return location.pathname.match(regex);
}

registerApplication({
  name: '@register/PrimaryApp',
  // eslint-disable-next-line no-undef
  app: () => System.import('@register/PrimaryApp') as never,
  activeWhen: navbar,
});

start();
