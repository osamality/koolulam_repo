import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Theme from '../Utils/Theme';

function HeadingText(props) {
  return (
    <Text style={[styles.boldText, {marginTop: props.top}]}>{props.text}</Text>
  );
}

export default HeadingText;
const styles = StyleSheet.create({
  boldText: {
    color: 'white',
    fontFamily: Theme.boldFont,
    fontSize: 35,
    textAlign: 'center',
  },
});
