import { AUTH_PROVIDERS, signInWithProvider } from '../api';
import { useLocale } from '../hooks/use-locale';

export const useAuthLogic = () => {
  const { locale } = useLocale();

  const onAuthClick = (provider: AUTH_PROVIDERS) => () => {
    signInWithProvider({ locale, provider });
  };

  return {
    onAuthWithGoogleClick: onAuthClick(AUTH_PROVIDERS.google),
    onAuthWithFacebookClick: onAuthClick(AUTH_PROVIDERS.facebook),
  };
};
