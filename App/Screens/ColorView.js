import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Theme from '../Utils/Theme';
import BackButton from '../Components/BackButton';

function ColorView({route}) {
  const name = route.params.name;
  const code = route.params.code;
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: code}]}>
      <BackButton />
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{code}</Text>
      </View>
    </SafeAreaView>
  );
}

export default ColorView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    color: 'white',
    fontSize: 25,
    fontFamily: Theme.boldFont,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
});
