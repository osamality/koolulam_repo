import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import TIcon from 'react-native-vector-icons/Entypo';
import Theme from '../Utils/Theme';
function TicketButton(props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Linking.openURL('https://bit.ly/3COy0Hv')}>
      <Text style={styles.text}>Buy Ticket</Text>
      <TIcon name={'ticket'} color={'white'} size={25} />
    </TouchableOpacity>
  );
}

export default TicketButton;
const styles = StyleSheet.create({
  container: {
    height: 44,
    width: '50%',
    backgroundColor: Theme.secondaryColor,
    marginLeft: Theme.wp * 0.43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: Theme.hp * 0.03,
  },
  text: {
    color: 'white',
    fontSize: 21,
    fontFamily: Theme.boldFont,
    marginRight: Theme.wp * 0.03,
  },
});
