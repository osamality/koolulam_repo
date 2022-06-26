import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Theme from '../Utils/Theme';

function OutlineButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default OutlineButton;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '70%',
    borderWidth: 2,
    borderColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: Theme.simpleFont,
  },
});
