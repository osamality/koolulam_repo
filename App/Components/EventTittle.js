import React from 'react';
import {Text, StyleSheet} from 'react-native';

function EventTittle({text}) {
  return <Text style={styles.tittle2}>{text}</Text>;
}

export default EventTittle;
const styles = StyleSheet.create({
  tittle2: {
    color: 'white',
    fontFamily: Theme.boldFont,
    fontSize: 22,
    textAlign: 'center',
    marginLeft: Theme.wp * 0.03,
    marginRight: Theme.wp * 0.03,
    marginTop: Theme.hp * 0.01,
    textDecorationLine: 'underline',
  },
});
