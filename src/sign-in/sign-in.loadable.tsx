import { AppLoadable } from '../components/app-loadable';

export const SignIn = AppLoadable(() =>
  import('./sign-in').then((module: any) => ({ default: module.SignIn })),
);
