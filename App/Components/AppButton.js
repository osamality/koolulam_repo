import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Theme from '../Utils/Theme';

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {marginTop: props.top, marginBottom: props.bottom},
      ]}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '85%',
    backgroundColor: Theme.secondaryColor,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: Theme.boldFont,
  },
});
