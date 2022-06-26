import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import AppButton from '../Components/AppButton';
import UserProfileData from '../Components/UserProfileData';
import BackButton from '../Components/BackButton';
import Theme from '../Utils/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
function UserProfile(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [language, setLanguage] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getName();
    }
  }, [props, isFocused]);
  const getName = async () => {
    const name = await AsyncStorage.getItem('firstName');
    const lName = await AsyncStorage.getItem('lastName');
    const email = await AsyncStorage.getItem('email');
    const language = await AsyncStorage.getItem('language');
    const city = await AsyncStorage.getItem('city');
    setName(name);
    setEmail(email);
    setCity(city);
    setLanguage(language);
    setLastName(lName);
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>{'Hello ' + name + '..!!'}</Text>
      <UserProfileData name={'person-outline'} text={name} />
      <UserProfileData name={'person-add-alt'} text={lastName} />
      <UserProfileData name={'alternate-email'} text={email} />
      <UserProfileData name={'add-location-alt'} text={city} />
      <UserProfileData name={'language'} text={language} />

      <AppButton
        text={'Edit Profile'}
        top={Theme.hp * 0.04}
        onPress={() => props.navigation.navigate('EditInfo')}
      />
    </SafeAreaView>
  );
}

export default UserProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  heading: {
    color: 'white',
    fontFamily: Theme.boldFont,
    fontSize: 20,
    marginTop: Theme.hp * 0.03,
    marginLeft: Theme.wp * 0.05,
  },
});
