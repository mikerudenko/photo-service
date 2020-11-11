import get from 'lodash/get';

import { signOut, useGetUser } from '../../../api';

export const useAppHeaderLogic = () => {
  const { user, role, userLoading } = useGetUser();

  return {
    onSignOutClick: signOut,
    role,
    user,
    userLoading,
    photoURL: get(user, 'photoURL') || '',
  };
};
