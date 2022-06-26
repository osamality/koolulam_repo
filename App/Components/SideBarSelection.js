import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import BIcon from 'react-native-vector-icons/Ionicons';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DIcon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../Utils/Theme';

function SideBarSelection(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.categorey == 'one' ? (
        <Icon name={props.icon} color={props.color} size={27} />
      ) : null}
      {props.categorey == 'two' ? (
        <BIcon name={props.icon} color={props.color} size={props.size} />
      ) : null}
      {props.categorey == 'three' ? (
        <CIcon name={props.icon} color={props.color} size={props.size} />
      ) : null}
      {props.categorey == 'four' ? (
        <DIcon name={props.icon} color={props.color} size={props.size} />
      ) : null}
      <Text style={[styles.text, {color: props.color}]}>{props.text}</Text>
      <Icon name="chevron-small-right" color={props.color} size={30} />
    </TouchableOpacity>
  );
}

export default SideBarSelection;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: Theme.hp * 0.04,
  },
  text: {
    fontFamily: Theme.simpleFont,
    fontSize: 20,
    fontWeight: '500',
    width: '40%',
  },
});
