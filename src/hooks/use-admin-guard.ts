import { useAutoEffect } from 'hooks.macro';
import { useHistory } from 'react-router-dom';
import { useGetUser, USER_ROLES } from '../api';
import { ROUTES } from '../app.constants';

export const useAdminGuard = () => {
  const user = useGetUser();
  const history = useHistory();

  useAutoEffect(() => {
    if (user && user.role !== USER_ROLES.admin) {
      history.push(ROUTES.root);
    }
  });
};
