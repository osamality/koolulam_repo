import {db} from '../firebase/FirebaseConfig';
import {doc, setDoc} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createPreviousEvent = async data => {
  try {
    let autoId = '';
    const CHARS =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    if (data) {
      delete data.tutorialId;
      delete data.tutorialName;
      delete data.tutorialDes;
      await setDoc(doc(db, 'PreviousEvents', autoId), data);
      console.log('setPreviousEvents');
    }
  } catch (error) {
    console.log(error);
  }
};
const createLiveEvent = async data => {
  try {
    let autoId = '';
    const CHARS =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    await setDoc(doc(db, 'LiveEvent', autoId), data);
    console.log('setLiveEvent');
  } catch (error) {
    console.log(error);
  }
};
const createUpcomingEvent = async data => {
  try {
    let autoId = '';
    const CHARS =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    if (data) {
      delete data.tutorialId;
      delete data.tutorialName;
      delete data.tutorialDes;
      await setDoc(doc(db, 'UpcomingEvent', autoId), data);
      console.log('setUpcomingEvent');
    }
  } catch (error) {
    console.log(error);
  }
};

export {createUpcomingEvent, createLiveEvent, createPreviousEvent};
