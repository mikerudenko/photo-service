import React, { memo } from 'react';
import { USER_ROLES } from '../api';

import { UserProfile } from '../user-profile';
import { AdminProfile } from '../admin-profile';
import { AppSpinner } from '../components/app-spinner';

const profilePages: Record<string, any> = {
  [USER_ROLES.admin]: AdminProfile,
  [USER_ROLES.user]: UserProfile,
};

export const Profile = memo(() => {
  const role = 'admin';
  const ProfilePage = profilePages[role];

  if (!role) {
    return <AppSpinner />;
  }

  return <ProfilePage />;
});
