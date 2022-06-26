import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Theme from '../Utils/Theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CIcon from 'react-native-vector-icons/Entypo';
import PIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function SettingComponent(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.categorey == 'one' ? (
        <Icon name={props.icon} color={'white'} size={22} style={styles.icon} />
      ) : null}
      {props.categorey == 'two' ? (
        <PIcon
          name={props.icon}
          color={'white'}
          size={27}
          style={styles.icon}
        />
      ) : null}
      <Text style={styles.text}>{props.text}</Text>
      <CIcon
        name="chevron-small-right"
        color={'white'}
        size={30}
        style={styles.iconC}
      />
    </TouchableOpacity>
  );
}

export default SettingComponent;
const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    width: '40%',
    fontFamily: Theme.simpleFont,
    fontWeight: '600',
    marginLeft: Theme.wp * 0.04,
  },
  icon: {
    marginLeft: Theme.wp * 0.04,
  },
  iconC: {
    marginLeft: Theme.wp * 0.32,
    width: '20%',
  },
});
