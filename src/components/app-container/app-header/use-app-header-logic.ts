import get from 'lodash/get';

import { signOut, useGetUser, useGetUserRole } from '../../../api';

export const useAppHeaderLogic = () => {
  const { user, userLoading } = useGetUser();
  const { role } = useGetUserRole(user);

  return {
    onSignOutClick: signOut,
    role,
    user,
    userLoading,
    photoURL: get(user, 'photoURL') || '',
  };
};
