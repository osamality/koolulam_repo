import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import AppButton from '../Components/AppButton';
import Logo from '../Components/Logo';
import SocialAccounts from '../Components/SocialAccounts';
import Theme from '../Utils/Theme';
function LandingScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text style={styles.heading}>Welcome!</Text>
      <AppButton
        text={'Join'}
        top={Theme.hp * 0.01}
        onPress={() => props.navigation.navigate('Register')}
      />
      <AppButton
        text={'Sign In'}
        top={Theme.hp * 0.01}
        onPress={() => props.navigation.navigate('Login')}
      />
      <SocialAccounts />
    </SafeAreaView>
  );
}

export default LandingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#131247',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontFamily: Theme.simpleFont,
    fontWeight: 'bold',
  },
});
