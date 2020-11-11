import React, { memo } from 'react';
import { useGetUser, USER_ROLES } from '../api';
import { UserProfile } from '../user-profile';
import { AdminProfile } from '../admin-profile';

const profilePages: Record<string, any> = {
  [USER_ROLES.admin]: AdminProfile,
  [USER_ROLES.user]: UserProfile,
};

export const Profile = memo(() => {
  const user = useGetUser();
  const ProfilePage = profilePages[user?.role];

  if (!user) {
    return null;
  }

  return <ProfilePage />;
});
