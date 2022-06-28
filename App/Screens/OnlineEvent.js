import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, StyleSheet, Image, FlatList} from 'react-native';
import Theme from '../Utils/Theme';
import Heading from '../Components/Heading';
import Events from '../Components/Events';
import Moment from 'moment';
import {db} from '../firebase/FirebaseConfig';
import {collection, query, getDocs} from 'firebase/firestore';

function OnlineEvent(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getLiveEvents();
  }, []);
  const getLiveEvents = async () => {
    const userRef = collection(db, 'LiveEvent');
    const q = query(userRef);
    const querySnapshot = await getDocs(q);
    var list = [];
    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
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
        tutorialDes: doc.data().tutorialDes,
        tutorialVideoId: doc.data().tutorialId,
        tutorialName: doc.data().tutorialName,
        ticketLink: doc.data().ticketLink,
      };
      list.push(myobj);
      setdata(list);
      //console.log('list', list);
    });
  };
  return (
    <SafeAreaView style={styles.conatiner}>
      <Heading upperText={'Live events'} />
      <FlatList
        style={{marginTop: Theme.hp * 0.04}}
        data={data}
        columnWrapperStyle={{alignItems: 'space-between'}}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        key={item => item.id}
        horizontal={false}
        renderItem={({item}) => (
          <Events
            image={require('../Assets/4.2.png')}
            date={item.date}
            onPress={() =>
              props.navigation.navigate('PastEventDetail', {
                // image: item.image,
                id: item.id,
                date: item.date,
                online: 'online',
                description: item.description,
                endTime: item.endTime,
                idYT: item.idYT,
                location: item.location,
                openTime: item.openTime,
                startTime: item.startTime,
                tittle: item.tittle,
                tutorialDes: item.tutorialDes,
                tutorialVideoId: item.tutorialVideoId,
                tutorialName: item.tutorialName,
                ticketLink: item.ticketLink,
              })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

export default OnlineEvent;
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
});
