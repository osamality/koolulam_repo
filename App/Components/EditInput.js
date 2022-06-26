import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../Utils/Theme';

function EditInput({name, placeholder, ...children}) {
  return (
    <View style={styles.container}>
      <Icon name={name} size={25} color={'white'} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Theme.secondaryColor}
        selectionColor={'white'}
        style={styles.input}
        {...children}
      />
    </View>
  );
}

export default EditInput;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1.5,
    borderBottomColor: 'white',
    width: '85%',
    alignSelf: 'center',
    marginTop: Theme.hp * 0.02,
  },
  input: {
    height: 50,
    fontSize: 21,
    width: '80%',
    marginLeft: Theme.wp * 0.03,
    fontFamily: Theme.simpleFont,
    color: 'white',
  },
});
