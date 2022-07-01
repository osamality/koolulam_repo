import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import Heading from '../Components/Heading';
import ColorComponent from '../Components/ColorComponent';
import Theme from '../Utils/Theme';

const colorList = [
  {
    name: 'All',
    colorCOde: 'gray',
  },
  {
    name: 'Red',
    colorCOde: '#FF0000',
  },
  {
    name: 'Lime',
    colorCOde: '#00FF00',
  },
  {
    name: 'Blue',
    colorCOde: '#0000FF',
  },
  {
    name: 'Yellow',
    colorCOde: '#FFFF00',
  },
  {
    name: 'Aqua',
    colorCOde: '#00FFFF',
  },
  {
    name: 'Magenta/Fuchsia',
    colorCOde: '#FF00FF',
  },
  {
    name: 'Silver',
    colorCOde: '#C0C0C0',
  },
  {
    name: 'Grey',
    colorCOde: '#808080',
  },
  {
    name: 'Maroon',
    colorCOde: '#800000',
  },
  {
    name: 'Olive',
    colorCOde: '#808000',
  },
  {
    name: 'Green',
    colorCOde: '#008000',
  },
  {
    name: 'Purple',
    colorCOde: '#800080',
  },
  {
    name: 'Teal',
    colorCOde: '#008080',
  },
  {
    name: 'Navy',
    colorCOde: '#000080',
  },
  {
    name: 'Brown',
    colorCOde: '#A52A2A',
  },
  {
    name: 'Pink',
    colorCOde: 'pink',
  },

];
function Colors(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading upperText={'List of all the colors'} />
      <FlatList
        style={styles.list}
        data={colorList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ColorComponent
            colorName={item.name}
            backgroundColor={item.colorCOde}
            colorList={colorList}
            onPress={() =>
              props.navigation.navigate('ColorView', {
                name: item.name,
                code: item.colorCOde,
                colorList: colorList

              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Colors;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  list: {
    marginTop: Theme.hp * 0.03,
  },
});
