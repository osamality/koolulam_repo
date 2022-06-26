import React, { useState, useEffect, useContext } from 'react';
import AuthRoute from './App/Routes/AuthRoute';
import StackRoute from './App/Routes/StackRoute';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './App/firebase/FirebaseConfig';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

function App(props) {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {user ?
        <StackRoute />
        :
        <AuthRoute />
      }
    </NavigationContainer>
  );
}

export default App;
