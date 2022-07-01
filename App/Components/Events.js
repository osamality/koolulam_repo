import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Theme from '../Utils/Theme';
import storage from '@react-native-firebase/storage';

function Events(props) {

  const [url, setUrl] = useState('')

  useEffect(() => {
    console.log('props.image::', props.image)
    getImage()
  }, [])

  const getImage = async () => {
    const uri = await storage().ref(`${props.image}`).getDownloadURL();
    console.log('urlurlurlurl', uri)
    setUrl(uri)
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.date}>{props.date}</Text>
    </TouchableOpacity>
  );
}

export default Events;
const styles = StyleSheet.create({
  image: {
    height: 160,
    width: 160,
  },
  date: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: Theme.hp * 0.02,
    marginBottom: Theme.hp * 0.02,
  },
  container: {
    //width: '50%',
    flex: 0.5,
    justifyContentL: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
});
