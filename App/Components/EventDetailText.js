import React from 'react';
import {Text, StyleSheet} from 'react-native';

function EventDetailText({date}) {
  return <Text style={styles.date}>{date}</Text>;
}

export default EventDetailText;
const styles = StyleSheet.create({
  date: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.01,
    textAlign: 'center',
  },
});
