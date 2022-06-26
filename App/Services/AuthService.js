import { db, auth } from '../firebase/FirebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const register = async data => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = userCredentials.user;
    if (user) {
      delete data.password;
      delete data.confirmPassword;
      await setDoc(doc(db, 'users', user.uid), data);
      const authData = { ...data, id: user.uid };
      // await AsyncStorage.setItem('@User', JSON.stringify(authData));
      // await AsyncStorage.setItem('@id', user.uid);

      await AsyncStorage.setItem('@User', JSON.stringify(authData));
      await AsyncStorage.setItem('@id', user.uid);
      await AsyncStorage.setItem('firstName', authData.firstName);
      await AsyncStorage.setItem('firstName', authData.firstName);
      await AsyncStorage.setItem('email', authData.email);
      await AsyncStorage.setItem('language', authData.language);
      await AsyncStorage.setItem('city', authData.city);
      await AsyncStorage.setItem('role', authData.role);
      await AsyncStorage.setItem('id', authData.id);
    }
  } catch (error) {
    if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
      alert('User with this email already exists.');
    } else {
      alert(error.message);
    }
    console.log('This is the error inside the register service ', error);
  }
};

const login = async data => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = userCredentials.user;
    if (user) {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const authData = { ...docSnap.data(), id: user.uid };
        await AsyncStorage.setItem('@User', JSON.stringify(authData));
        await AsyncStorage.setItem('@id', user.uid);
        await AsyncStorage.setItem('firstName', authData.firstName);
        await AsyncStorage.setItem('firstName', authData.firstName);
        await AsyncStorage.setItem('email', authData.email);
        await AsyncStorage.setItem('language', authData.language);
        await AsyncStorage.setItem('city', authData.city);
        await AsyncStorage.setItem('role', authData.role);
        await AsyncStorage.setItem('id', authData.id);
      } else {
        alert('User does not exist.');
        const deletedUser = await deleteUser(user);
      }
    }
  } catch (error) {
    if (error.message === 'Firebase: Error (auth/wrong-password).') {
      alert('Password is incorrect.');
    } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
      alert('User does not exist!!.');
    } else {
      alert(error.message);
    }
  }
};
const changePassword = async values => {
  try {
    await sendPasswordResetEmail(auth, values.email);
    console.log('Email Sent Successfully');
    alert('change password and login again with new password');
    logout();
  } catch (error) {
    console.log(error);
  }
};
const logout = async setData => {
  signOut(auth)
    .then(async () => {
      //setData({user: null});
      await AsyncStorage.removeItem('firstName');
      await AsyncStorage.removeItem('lastName');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('language');
      await AsyncStorage.removeItem('city');
      await AsyncStorage.removeItem('role');
      await AsyncStorage.removeItem('@User');
      await AsyncStorage.removeItem('id');
      await AsyncStorage.removeItem('@id');
    })
    .catch(error => {
      alert(error.message);
    });
};

export { register, login, logout, changePassword };
