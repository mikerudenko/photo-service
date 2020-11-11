import { RESOURCE_MAP } from 'api/api.constants';
import firebase from 'firebase';
import get from 'lodash/get';
import { useQuery } from 'react-query';
import { firebaseAuth } from '../../services/firebase-service';
import {
  AUTH_PROVIDERS,
  CredentialsPayload,
  ProviderPayload,
} from './api-auth.constants';

const PROVIDER_RESOLVERS = {
  [AUTH_PROVIDERS.google]: new firebase.auth.GoogleAuthProvider(),
  [AUTH_PROVIDERS.facebook]: new firebase.auth.FacebookAuthProvider(),
};

export const signUpWithCredentials = ({
  email,
  password,
}: CredentialsPayload) =>
  firebaseAuth.createUserWithEmailAndPassword(email, password);

export const signInWithCredentials = ({
  email,
  password,
}: CredentialsPayload) =>
  firebaseAuth.signInWithEmailAndPassword(email, password);

export const signOut = () => firebaseAuth.signOut();

export const signInWithProvider = async ({
  locale,
  provider,
}: ProviderPayload) => {
  const providerInstance = PROVIDER_RESOLVERS[provider];
  setLocale(locale);
  return firebaseAuth.signInWithPopup(providerInstance);
};

export const getUserRole = async (user: any | null) => {
  let token;
  if (user) {
    token = await user.getIdTokenResult();
  } else {
    token = null;
  }

  return await get(token, 'claims.role', null);
};

export const getCurrentUser = () => firebase.auth().currentUser;

export const setLocalPersistence = () =>
  firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const sendPasswordResetEmail = (email: string) =>
  firebaseAuth.sendPasswordResetEmail(email);

export const setLocale = (locale: string) =>
  (firebaseAuth.languageCode = locale);

export const useGetUser = () => {
  const { data, error, isLoading, isFetched } = useQuery(
    [RESOURCE_MAP.user],
    getCurrentUser,
  );

  return {
    user: data,
    role: getUserRole(data),
    isFetched,
    userLoading: isLoading,
    userError: error,
  };
};
