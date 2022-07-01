import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Theme from '../Utils/Theme';
import SideBarSelection from '../Components/SideBarSelection';
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
const CustomSidebarMenu = props => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    getName();
  }, [props, isFocused]);
  const getName = async () => {
    console.log('-==--=-=-=')
    const name = await AsyncStorage.getItem('firstName');
    const email = await AsyncStorage.getItem('email');
    const role = await AsyncStorage.getItem('role');
    const user = await AsyncStorage.getItem('@User');
    setName(name);
    setEmail(email);
    setRole(role);

    // console.log(name, email, user)
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.primaryColor }}>
      {/*Top Large Image */}
      <Image
        source={require('../Assets/image.jpg')}
        style={styles.sideMenuProfileIcon}
      />
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <SideBarSelection
          categorey="one"
          icon={'home'}
          color={color == 'home' ? Theme.secondaryColor : 'white'}
          text={'Home Page'}
          onPress={() => {
            setColor('home');
            props.navigation.navigate('FirstPage');
          }}
        />
        <SideBarSelection
          categorey="two"
          icon={'bar-chart'}
          color={color == 'event' ? Theme.secondaryColor : 'white'}
          text={'Online Event'}
          size={23}
          onPress={() => {
            setColor('event');
            props.navigation.navigate('OnlineEvent');
          }}
        />
        <SideBarSelection
          categorey="three"
          icon={'folder-image'}
          color={color == 'Gallery' ? Theme.secondaryColor : 'white'}
          text={'Gallery'}
          size={27}
          onPress={() => {
            setColor('Gallery');
            props.navigation.navigate('Gallery');
          }}
        />
        <SideBarSelection
          categorey="four"
          icon={'date-range'}
          color={color == 'Calender' ? Theme.secondaryColor : 'white'}
          text={'Event Calender'}
          size={27}
          onPress={() => {
            setColor('Calender');
            props.navigation.navigate('EventCalender');
          }}
        />
        {role == 'Admin' ? (
          <SideBarSelection
            categorey="one"
            icon={'plus'}
            color={color == 'plus' ? Theme.secondaryColor : 'white'}
            text={'Create Event'}
            onPress={() => {
              setColor('color-lens');
              props.navigation.navigate('CreateEvent');
            }}
          />
        ) : null}
        <SideBarSelection
          categorey="four"
          icon={'color-lens'}
          color={color == 'color-lens' ? Theme.secondaryColor : 'white'}
          text={'Colors'}
          size={30}
          onPress={() => {
            setColor('home');
            props.navigation.navigate('Colors');
          }}
        />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.setting}
        onPress={() => {
          props.navigation.navigate('Settings');
        }}>
        <Icon name="settings-sharp" size={27} color={'white'} />
        <Text style={[styles.text, { color: 'white' }]}> Settings </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    //resizeMode: 'center',
    width: 85,
    height: 85,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.04,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    alignSelf: 'center',
    marginTop: Theme.hp * 0.02,
    color: Theme.secondaryColor,
    fontFamily: Theme.boldFont,
    fontSize: 20,
  },
  email: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: Theme.simpleFont,
    fontWeight: '600',
    fontSize: 17,
    marginTop: Theme.hp * 0.01,
  },
  setting: {
    flexDirection: 'row',
    marginTop: Theme.hp * -0.1,
    marginLeft: Theme.wp * 0.08,
  },
  text: {
    fontFamily: Theme.simpleFont,
    fontSize: 20,
    fontWeight: '500',
    width: '40%',
    marginLeft: Theme.wp * 0.05,
  },
});

export default CustomSidebarMenu;
