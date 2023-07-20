import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
export const firebaseConfig = {
  apiKey: 'AIzaSyDUvS-dCMSqeQLbrQFmDblDu--yBCRE32Q',
  authDomain: 'fullstack-template-cb777.firebaseapp.com',
  projectId: 'fullstack-template-cb777',
  storageBucket: 'fullstack-template-cb777.appspot.com',
  messagingSenderId: '946902606540',
  appId: '1:946902606540:web:1115ec01fae93a4c931869',
  measurementId: 'G-QTTMB0BWMF',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
