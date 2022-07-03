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
import firestore from '@react-native-firebase/firestore';


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

function lower(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === 'string') {
      obj[prop] = obj[prop].toLowerCase();
    }
    if (typeof obj[prop] === 'object') {
      lower(obj[prop]);
    }
  }
  return obj;
}

const login = async data => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );
    const user = userCredentials.user;

    console.log('user::', user)
    if (user) {
      const users = await firestore().collection('users').get();
      // console.log('users >>', users)
      var list = {};
      users.forEach(doc => {
        let usr = lower(doc.data())
        console.log('doc.data().email == user.email', usr.email, user.email, usr.email == user.email)
        if (usr.email == user.email) {
          list = {
            uid: user.uid,
            firstName: usr.firstName,
            lastName: usr.lastName,
            email: usr.email,
            language: usr.language,
            city: usr.city,
            role: usr.role,
            // id: usr.id,
          };
        }
      });
      console.log('list :::::, list', list)


      // const docRef = doc(db, 'users', user.uid);
      // const docSnap = await getDoc(docRef);
      // console.log('usersusersusers::', users)
      if (list) {
        // const authData = { ...users, id: user.uid };

        // console.log('authData::', authData)

        // await AsyncStorage.setItem('@User', JSON.stringify(list));
        await AsyncStorage.setItem('@id', list.uid);
        await AsyncStorage.setItem('firstName', list.firstName);
        await AsyncStorage.setItem('lastName', list.lastName);
        await AsyncStorage.setItem('email', list.email);
        await AsyncStorage.setItem('language', list.language);
        await AsyncStorage.setItem('city', list.city);
        await AsyncStorage.setItem('role', list.role);
        // await AsyncStorage.setItem('id', list.id);
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
      console.log(error)
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
