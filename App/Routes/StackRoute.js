import React from 'react';

import Main from '../Screens/Main';
import EventCalender from '../Screens/EventCalender';
import Gallery from '../Screens/Gallery';
import OnlineEvent from '../Screens/OnlineEvent';
import UserProfile from '../Screens/UserProfile';
import EditInfo from '../Screens/EditInfo';
import EventDetail from '../Screens/EventDetail';
import CreateEvent from '../Screens/AministratorScreens/CreateEvent';
import UpdateEvent from '../Screens/AministratorScreens/UpdateEvent';
import UpdateLiveEvent from '../Screens/AministratorScreens/UpdateLiveEvent';
import VideoScreen from '../Screens/VideoScreen';
import PastEventDetail from '../Screens/PastEventDetail';
import Colors from '../Screens/Colors';
import ColorView from '../Screens/ColorView';
import Settings from '../Screens/Settings';
import ChangePassword from '../Screens/ChangePassword';

import CustomSidebarMenu from './CustomSidebarMenu';
import {View, TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Theme from '../Utils/Theme';
import Icon from 'react-native-vector-icons/Entypo';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = props => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};
function FirstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={Main}
        options={{
          title: 'Koolulam', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="OnlineEvent"
        component={OnlineEvent}
        options={{
          title: 'OnlineEvent', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          title: 'UserProfile', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Gallery"
        component={Gallery}
        options={{
          title: 'Gallery', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="EventCalender"
        component={EventCalender}
        options={{
          title: 'EventCalender', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="EditInfo"
        component={EditInfo}
        options={{
          title: 'Update Your Information', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{
          title: 'EventDetail', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
          title: 'CreateEvent', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="UpdateEvent"
        component={UpdateEvent}
        options={{
          title: 'UpdateEvent', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="UpdateLiveEvent"
        component={UpdateLiveEvent}
        options={{
          title: 'UpdateLiveEvent', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          title: 'View Video', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="PastEventDetail"
        component={PastEventDetail}
        options={{
          title: 'Event Detail', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Colors"
        component={Colors}
        options={{
          title: 'Colors List', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ColorView"
        component={ColorView}
        options={{
          title: 'Color View', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: 'Change Password', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: Theme.secondaryColor, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: Theme.boldFont, //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}
// function secondScreenStack({navigation}) {
//   return (
//     <Stack.Navigator
//       initialRouteName="SecondPage"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SecondPage"
//         component={SecondPage}
//         options={{
//           title: 'Second Page', //Set Header Title
//         }}
//       />
//       <Stack.Screen
//         name="ThirdPage"
//         component={ThirdPage}
//         options={{
//           title: 'Third Page', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function StackRoute(props) {
  return (
    <Drawer.Navigator drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="MainPage"
        options={{
          drawerLabel: 'First page Option',
          headerShown: false,
        }}
        component={FirstScreenStack}
      />
      {/* <Drawer.Screen
          name="SecondPage"
          options={{drawerLabel: 'Second page Option'}}
          component={secondScreenStack}
        /> */}
    </Drawer.Navigator>
  );
}

export default StackRoute;
