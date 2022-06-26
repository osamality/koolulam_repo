import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import EyeIcon from 'react-native-vector-icons/Entypo';
import Theme from '../Utils/Theme';

function PasswordInput({name, placeholder, ...children}) {
  const [secure, setSecure] = useState(true);
  const toggleSecure = () => {
    setSecure(!secure);
  };
  return (
    <View style={styles.container}>
      <Icon name={name} size={25} color={'white'} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={Theme.secondaryColor}
        selectionColor={'white'}
        style={styles.input}
        secureTextEntry={secure}
        {...children}
      />
      <TouchableOpacity onPress={() => toggleSecure()} style={styles.eyeIcon}>
        <EyeIcon
          name={secure ? 'eye' : 'eye-with-line'}
          color={'white'}
          size={23}
        />
      </TouchableOpacity>
    </View>
  );
}

export default PasswordInput;
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
    //justifyContent: 'space-between',
  },
  input: {
    height: 40,
    fontSize: 21,
    width: '75%',
    marginLeft: Theme.wp * 0.03,
    fontFamily: Theme.simpleFont,
    color: 'white',
  },
  eyeIcon: {
    marginLeft: Theme.wp * 0.01,
  },
});
