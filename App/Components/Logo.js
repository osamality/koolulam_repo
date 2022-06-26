import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Theme from '../Utils/Theme';

const Logo = () => {
  return (
    <View>
      <Image
        source={require('../Assets/Koolulam_Logo_White.png')}
        style={styles.logo}></Image>
      <Text style={styles.Text}>Singing Is Believing</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  Text: {
    color: 'white',
    fontSize: 25,
    paddingVertical: 5,
    textAlign: 'center',
    fontFamily: Theme.boldFont,
    marginTop: Theme.hp * 0.02,
  },

  logo: {
    width: 280,
    height: 280,
    marginTop: '10%',
  },
});
