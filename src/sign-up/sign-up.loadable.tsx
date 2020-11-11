import { AppLoadable } from '../components/app-loadable';

export const SignIn = AppLoadable(() =>
  import('./sign-up').then((module: any) => ({ default: module.SignUp })),
);
