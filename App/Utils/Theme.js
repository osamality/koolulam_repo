import {Dimensions} from 'react-native';

let hp = Dimensions.get('window').height;
let wp = Dimensions.get('window').width;

export default Theme = {
  wp,
  hp,
  appFont: 'sans-serif-condensed',
  primaryColor: '#131247',
  secondaryColor: '#8a2be2',
  simpleFont: 'AvenirNextCondensed-Italic',
  boldFont: 'AvenirNextCondensed-HeavyItalic',
};
