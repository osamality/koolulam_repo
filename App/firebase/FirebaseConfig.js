import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBr4WXT_JOCjlnwycn96MnriRaqcdelMHU',
  authDomain: 'koolulam-966ed.firebaseapp.com',
  databaseURL: 'https://koolulam-966ed-default-rtdb.firebaseio.com',
  projectId: 'koolulam-966ed',
  storageBucket: 'koolulam-966ed.appspot.com',
  messagingSenderId: '398004427536',
  appId: '1:398004427536:web:2190523260a5c6c5ae2395',
  measurementId: 'G-DX0SGH77NV',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {auth, db, storage};
