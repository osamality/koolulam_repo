import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';
import Theme from '../Utils/Theme';

function ErrorMessage({error, visible}) {
  if (!visible || !error) return null;
  return <Text style={styles.text}>{error}</Text>;
}

export default ErrorMessage;
const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 15,
    marginTop: Theme.hp * 0.01,
    textAlign: 'center',
  },
});
