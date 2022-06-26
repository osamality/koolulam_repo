import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

function BackButton(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.arrowBack}
      onPress={() => navigation.goBack()}>
      <Icon name={'arrow-back'} size={25} color={'white'} />
    </TouchableOpacity>
  );
}

export default BackButton;
const styles = StyleSheet.create({
  arrowBack: {
    marginTop: Theme.hp * 0.02,
    marginLeft: Theme.wp * 0.03,
  },
});
