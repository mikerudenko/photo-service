import firebase from 'firebase';

export type FirebaseServerCollectionItem = firebase.firestore.QueryDocumentSnapshot;
export type FirebaseServerCollection = FirebaseServerCollectionItem[];
