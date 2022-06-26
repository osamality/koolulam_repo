import React, {useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, Image} from 'react-native';
import Theme from '../Utils/Theme';

function SplashScreen(props) {
  useEffect(() => {
    // Move to Login/Home Screen After 3 secs of Splash
    setTimeout(async () => {
      props.navigation.navigate('LandingScreen');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../Assets/Gifs/AnimatedLogo.gif')}
        style={styles.image}
      />
    </SafeAreaView>
  );
}

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 400,
    width: 400,
  },
});
