import { AUTH_PROVIDERS, signInWithProvider } from '../api';
import { getLocale } from '../services/intl-service';

export const useAuthLogic = () => {
  const locale = getLocale();

  const onAuthClick = (provider: AUTH_PROVIDERS) => () => {
    signInWithProvider({ locale, provider });
  };

  return {
    onAuthWithGoogleClick: onAuthClick(AUTH_PROVIDERS.google),
    onAuthWithFacebookClick: onAuthClick(AUTH_PROVIDERS.facebook),
  };
};
