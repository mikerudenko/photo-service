import React, { memo } from 'react';
import { useGetUser, USER_ROLES, useGetUserRole } from '../api';
import { useAutoEffect } from 'hooks.macro';
import { useHistory } from 'react-router-dom';

import { UserProfile } from '../user-profile';
import { AdminProfile } from '../admin-profile';
import { ROUTES } from '../app.constants';

const profilePages: Record<string, any> = {
  [USER_ROLES.admin]: AdminProfile,
  [USER_ROLES.user]: UserProfile,
};

export const Profile = memo(() => {
  const { user } = useGetUser();
  const { role } = useGetUserRole(user);
  const ProfilePage = profilePages[role];
  const history = useHistory();

  useAutoEffect(() => {
    if (user && !role) {
      history.push(ROUTES.root);
    }
  });

  if (!role) {
    return null;
  }

  return <ProfilePage />;
});
