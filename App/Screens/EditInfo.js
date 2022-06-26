import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import Theme from '../Utils/Theme';
import EditInput from '../Components/EditInput';
import Icon from 'react-native-vector-icons/Ionicons';
import AppButton from '../Components/AppButton';
import BackButton from '../Components/BackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {db} from '../firebase/FirebaseConfig';
import {doc, updateDoc, setDoc} from 'firebase/firestore';

function EditInfo(props) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [language, setLanguage] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [id, setID] = useState('');
  useEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    const name = await AsyncStorage.getItem('firstName');
    const lName = await AsyncStorage.getItem('lastName');
    const email = await AsyncStorage.getItem('email');
    const language = await AsyncStorage.getItem('language');
    const city = await AsyncStorage.getItem('city');
    const role = await AsyncStorage.getItem('role');
    const id = await AsyncStorage.getItem('id');
    setID(id);
    setName(name);
    setEmail(email);
    setCity(city);
    setLanguage(language);
    setLastName(lName);
    setRole(role);
  };

  const updateUser = async () => {
    try {
      const eventRef = doc(db, 'users', id);
      await updateDoc(eventRef, {
        role: role,
        firstName: name,
        lastName: lastName,
        email: email,
        city: city,
        language: language,
      });
      console.log('documentUpdated');
      props.navigation.navigate('FirstPage');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text style={styles.heading}>{name}..!! Update your info:</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputContainer}>
            <EditInput
              placeholder={'First name'}
              name={'person-outline'}
              value={name}
              onChangeText={text => setName(text)}
            />

            <EditInput
              placeholder={'Last name'}
              name={'person-add-alt'}
              value={lastName}
              onChangeText={text => setLastName(text)}
            />

            <EditInput
              placeholder={'Email Address'}
              name={'alternate-email'}
              value={email}
              editable={false}
            />

            <EditInput
              placeholder={'City of Residence'}
              name={'add-location-alt'}
              value={city}
              onChangeText={text => setCity(text)}
            />

            <EditInput
              placeholder={'Preffered Language'}
              name={'language'}
              value={language}
              onChangeText={text => setLanguage(text)}
            />
          </View>
          <AppButton
            text={'Update'}
            top={Theme.hp * 0.06}
            onPress={() => updateUser()}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default EditInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.04,
  },
  inputContainer: {
    marginTop: Theme.hp * 0.01,
  },
  heading: {
    color: 'white',
    fontFamily: Theme.boldFont,
    fontSize: 20,
    marginTop: Theme.hp * 0.03,
    marginLeft: Theme.wp * 0.05,
  },
  arrowBack: {
    marginTop: Theme.hp * 0.02,
    marginLeft: Theme.wp * 0.03,
  },
});
