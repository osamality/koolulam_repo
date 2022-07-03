import { db } from '../firebase/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Helpers from '../Utils/Helpers';
import firestore from '@react-native-firebase/firestore';

const createPreviousEvent = async data => {
  console.log('createPreviousEvent>>>>>', data)
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

      firestore()
        .collection('PreviousEvents')
        .add(data)
        .then(() => { console.log('Event Created'); });

      // await setDoc(doc(db, 'PreviousEvents', autoId), data);
      console.log('setPreviousEvents Event Created');
      Helpers.showToastMessage('Event Created.')
    }
  } catch (error) {
    console.log('errorerror', error);
  }
};
const createLiveEvent = async data => {
  console.log('createLiveEvent??>>>>>', data)
  try {
    let autoId = '';
    const CHARS =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    firestore()
      .collection('LiveEvent')
      .add(data)
      .then(() => {
        console.log('Event Created');
      });

    // await setDoc(doc(db, 'LiveEvent', autoId), data);
    console.log('setLiveEvent');
    Helpers.showToastMessage('Event Created')
  } catch (error) {
    console.log(error);
  }
};
const createUpcomingEvent = async data => {
  // console.log('createUpcomingEvent>>>', data)
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
      console.log('createUpcomingEvent>>>', autoId, data)
      firestore()
        .collection('LiveEvent')
        .add(data)
        .then(() => {
          console.log('Event Created');
        });

      // await setDoc(doc(db, 'UpcomingEvent', autoId), data);
      Helpers.showToastMessage('Event Created')
      console.log('UpcomingEvent---')
    }
  } catch (error) {
    console.log(error);
  }
};

export { createUpcomingEvent, createLiveEvent, createPreviousEvent };
