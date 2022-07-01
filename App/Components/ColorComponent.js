import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import Theme from '../Utils/Theme';

function ColorComponent(props) {
  const [color, setColor] = useState(props.colorList[0].colorCOde)
  // useEffect(() => {
  //   setInterval(() => {
  //     setColor(props.colorList[Math.floor(Math.random() * props.colorList.length)])
  //   }, 2000)
  // })
  return (
    <>
      {props.colorName == 'All' ?
        <TouchableOpacity
          onPress={props.onPress}
          style={[styles.colorList, { backgroundColor: color.colorCOde }]}>
          <Text style={styles.colorText}>{props.colorName}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          onPress={props.onPress}
          style={[styles.colorList, { backgroundColor: props.backgroundColor }]}>
          <Text style={styles.colorText}>{props.colorName}</Text>
        </TouchableOpacity>
      }

    </>
  );
}

export default ColorComponent;
const styles = StyleSheet.create({
  colorList: {
    height: 60,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.hp * 0.03,
    borderWidth: 1,
    borderColor: 'white',
  },
  colorText: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Theme.simpleFont,
  },
});
