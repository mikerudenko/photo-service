import get from 'lodash/get';

import { useSignOut, useGetUser } from '../../../api';
import { useHistory } from 'react-router';
import { useAutoCallback } from 'hooks.macro';
import { ROUTES } from '../../../app.constants';

export const useAppHeaderLogic = () => {
  const user = useGetUser();
  const history = useHistory();
  const signOut = useSignOut();

  const onSignOutClick = useAutoCallback(async () => {
    await signOut();
    history.push(ROUTES.root);
  });

  return {
    onSignOutClick,
    user,
    photoURL: get(user, 'photoURL') || '',
  };
};
