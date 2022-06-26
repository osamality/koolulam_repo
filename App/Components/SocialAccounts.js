import React from 'react';
import {View, TouchableOpacity, Image, Linking} from 'react-native';
import Theme from '../Utils/Theme';

function SocialAccounts(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Theme.hp * 0.02,
        marginBottom: Theme.hp * 0.02,
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.facebook.com/koolulam')}>
        <Image
          source={require('../Assets/Gifs/facebook.png')}
          style={{height: 40, width: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://instagram.com/koolulam?igshid=YmMyMTA2M2Y')
        }>
        <Image
          source={require('../Assets/Gifs/instagram.png')}
          style={{height: 40, width: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.koolulam.com/#koolStore')}>
        <Image
          source={require('../Assets/Gifs/youtube.png')}
          style={{height: 40, width: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/company/koolulam/')
        }>
        <Image
          source={require('../Assets/Gifs/linkedin.png')}
          style={{height: 40, width: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://twitter.com/koolulam')}>
        <Image
          source={require('../Assets/Gifs/twitter.png')}
          style={{height: 40, width: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.koolulam.com/#koolStore')}>
        <Image
          source={require('../Assets/Gifs/soundcloud.png')}
          style={{height: 40, width: 40}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SocialAccounts;
