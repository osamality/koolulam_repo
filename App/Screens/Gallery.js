import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, FlatList } from 'react-native';
import Theme from '../Utils/Theme';
import Heading from '../Components/Heading';
import Events from '../Components/Events';
import { db } from '../firebase/FirebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';

function Gallery(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPastEvents();
  }, []);
  const getPastEvents = async () => {


    const users = await firestore().collection('PreviousEvents').get();
    console.log('users >>', users)
    // const userRef = collection(db, 'PreviousEvents');
    // const q = query(userRef);
    // const querySnapshot = await getDocs(q);
    var list = [];
    users.forEach(doc => {
      //console.log(doc.id, ' => ', doc.data());
      const id = doc.id;
      var myobj = {
        id: id,
        date: doc.data().date,
        description: doc.data().description,
        endTime: doc.data().end,
        idYT: doc.data().idYT,
        location: doc.data().location,
        openTime: doc.data().open,
        startTime: doc.data().start,
        tittle: doc.data().tittle,
        image: doc.data().image,
      };
      list.push(myobj);
      console.log('list', list);
    });
    setData(list);
  };
  return (
    <SafeAreaView style={styles.conatiner}>
      <Heading upperText={'All the previous events'} />
      <FlatList
        style={{ marginTop: Theme.hp * 0.04 }}
        data={data}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <Events
            image={item.image}
            date={item.date}
            onPress={() =>
              props.navigation.navigate('PastEventDetail', {
                image: item.image,
                id: item.id,
                date: item.date,
                description: item.description,
                endTime: item.endTime,
                idYT: item.idYT,
                location: item.location,
                openTime: item.openTime,
                startTime: item.startTime,
                tittle: item.tittle,
                online: 'past',
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Gallery;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
});
