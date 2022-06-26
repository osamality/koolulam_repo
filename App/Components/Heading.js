import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Theme from '../Utils/Theme';

const KululamHeaderCustomised = ({upperText}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{upperText}</Text>
    </View>
  );
};

export default KululamHeaderCustomised;

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: 'center',
    marginTop: Theme.hp * 0.02,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: Theme.simpleFont,
  },
});
