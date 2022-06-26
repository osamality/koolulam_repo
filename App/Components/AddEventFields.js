import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Theme from '../Utils/Theme';

function AddEventFields(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.tittle}</Text>
      <View style={[styles.box, {height: props.height, width: props.width}]}>
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={Theme.secondaryColor}
          selectionColor={Theme.secondaryColor}
          numberOfLines={props.lines}
          multiline={props.multiline}
          value={props.value}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          style={[styles.input, {height: props.inputHeight}]}></TextInput>
      </View>
    </View>
  );
}

export default AddEventFields;
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: Theme.hp * 0.01,
    marginTop: Theme.hp * 0.02,
    fontWeight: '600',
  },
  box: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  input: {
    color: 'white',
    fontSize: 17,
    padding: 10,
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
  },
});
