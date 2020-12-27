import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { getRedirectLink } from './liqpay';

export { onUserCreate, updateUser } from './functions.users';

admin.initializeApp();

export const triggerTestPay = functions.https.onCall((data, context) => {
  return getRedirectLink();
});
