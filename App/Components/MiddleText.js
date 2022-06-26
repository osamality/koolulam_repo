import React from 'react';
import {Text, StyleSheet} from 'react-native';

function MiddleText(props) {
  return <Text style={styles.text}>{props.text}</Text>;
}

export default MiddleText;
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
    fontFamily: Theme.simpleFont,
    textAlign: 'center',
    marginTop: Theme.hp * 0.02,
  },
});
