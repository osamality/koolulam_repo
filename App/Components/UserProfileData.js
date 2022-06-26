import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../Utils/Theme';

function UserProfileData(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.name} size={25} color={'white'} />
      <Text style={styles.input}>{props.text}</Text>
    </View>
  );
}

export default UserProfileData;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '85%',
    alignSelf: 'center',
    marginTop: Theme.hp * 0.02,
  },
  input: {
    fontSize: 21,
    marginLeft: Theme.wp * 0.03,
    fontFamily: Theme.simpleFont,
    color: 'white',
  },
});
