import { authMessages } from './api-auth.messages';

export enum AUTH_PROVIDERS {
  google = 'google',
  facebook = 'facebook',
}

export interface UpdateUserPayload {
  email: string;
  password: string;
  displayName: string;
  photoURL: string;
  uid: string;
}

export interface CredentialsPayload {
  email: string;
  password: string;
}

export interface ProviderPayload {
  locale: string;
  provider: AUTH_PROVIDERS;
}

export interface UserPayload {
  user: Record<string, any> | null;
  role: USER_ROLES | null;
}

export enum USER_ROLES {
  admin = 'admin',
  manager = 'manager',
  user = 'user',
  unknown = 'unknown',
}

export const SERVER_ERROR_CODES = {
  userNotFound: 'auth/user-not-found',
  wrongPassword: 'auth/wrong-password',
};

export const AUTH_ERROR_NOTIFICATIONS = {
  [SERVER_ERROR_CODES.userNotFound]: authMessages.userNotFound,
  [SERVER_ERROR_CODES.wrongPassword]: authMessages.wrongPassword,
};
