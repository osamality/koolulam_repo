import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Theme from '../Utils/Theme';
function LiveTag(props) {
  return (
    <View style={styles.container}>
      <View style={styles.dot}></View>
      <Text style={styles.text}>Live Now</Text>
    </View>
  );
}

export default LiveTag;
const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '25%',
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: Theme.wp * 0.06,
    marginTop: Theme.hp * -0.01,
    marginBottom: Theme.hp * 0.01,
  },
  dot: {
    height: 7,
    width: 7,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});
