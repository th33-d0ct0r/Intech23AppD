import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
const firebaseConfig = {
  apiKey: Constants.manifest.extraKeys.apiKey,
  authDomain: Constants.manifest.extraKeys.authDomain,
  projectId: Constants.manifest.extraKeys.projectId,
  storageBucket: Constants.manifest.extraKeys.storageBucket,
  messagingSenderId: Constants.manifest.extraKeys.messagingSenderId,
  appId: Constants.manifest.extraKeys.appId,
  databaseURL: Constants.manifest.extraKeys.databaseURL
};
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
