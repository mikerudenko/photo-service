import {
  getCallableFunction,
  firebaseStorage,
  firebaseFirestore,
} from '../../services/firebase-service';

export const updateUserRequest = getCallableFunction('updateUser');
export const getManagersRequest = () =>
  firebaseFirestore.collection('users').where('role', '==', 'manager').get();

export const useUpdateUserAvatar = async (avatar: File, user: any) => {
  const avatarRef = firebaseStorage
    .ref()
    .child(`users/${user.uid}/avatar.${avatar.name.split('.').pop()}`);
  await avatarRef.put(avatar);
  return avatarRef.getDownloadURL();
};
