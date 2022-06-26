import React from 'react';
import splash from '../Screens/SplashScreen';
import Login from '../Screens/LoginScreen';
import Register from '../Screens/RegisterScreen';
import Landing from '../Screens/LandingScreen';
import StackRoute from '../Routes/StackRoute';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
function AuthRoute(props) {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LandingScreen"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={StackRoute}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthRoute;
