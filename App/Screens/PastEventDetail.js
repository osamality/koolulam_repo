import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import BackButton from '../Components/BackButton';
import SocialAccounts from '../Components/SocialAccounts';
import OutlineButton from '../Components/OutlineButton';
import EventDetailText from '../Components/EventDetailText';
import EventTittle from '../Components/EventTittle';
import LiveTag from '../Components/LiveTag';
import TicketButton from '../Components/TicketButton';
import Theme from '../Utils/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PastEventDetail({route, navigation}) {
  const [role, setRole] = useState('');
  useEffect(() => {
    getRole();
  }, []);
  const getRole = async () => {
    const role = await AsyncStorage.getItem('role');
    setRole(role);
  };
  // const image = route.params.image;
  const id = route.params?.id;
  const date = route.params?.date;
  const online = route.params?.online;
  const description = route.params?.description;
  const endTime = route.params?.endTime;
  const idYT = route.params?.idYT;
  const location = route.params?.location;
  const openTime = route.params?.openTime;
  const startTime = route.params?.startTime;
  const tittle = route.params?.tittle;
  const tutorialDes = route.params?.tutorialDes;
  const tutorialVideoId = route.params?.tutorialVideoId;
  const tutorialName = route.params?.tutorialName;
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      {role == 'Admin' ? (
        <TouchableOpacity
          style={styles.update}
          onPress={() =>
            online == 'online'
              ? navigation.navigate('UpdateLiveEvent', {
                  id: id,
                  date: date,
                  online: online,
                  description: description,
                  endTime: endTime,
                  idYT: idYT,
                  location: location,
                  openTime: openTime,
                  startTime: startTime,
                  tittle: tittle,
                  tutorialDes: tutorialDes,
                  tutorialVideoId: tutorialVideoId,
                  tutorialName: tutorialName,
                })
              : navigation.navigate('UpdateEvent', {
                  id: id,
                  date: date,
                  online: online,
                  description: description,
                  endTime: endTime,
                  idYT: idYT,
                  location: location,
                  openTime: openTime,
                  startTime: startTime,
                  tittle: tittle,
                })
          }>
          <Icon name="update" color={'white'} size={30} />
        </TouchableOpacity>
      ) : null}
      {online == 'online' || online == 'upcomming' ? <TicketButton /> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../Assets/4.2.png')} style={styles.image} />
        {online == 'online' ? <LiveTag /> : null}
        <Text style={styles.title}>{tittle}</Text>
        <OutlineButton
          text={'View Youtube Video'}
          onPress={() => {
            navigation.navigate('VideoScreen', {
              title: tittle,
              description: description,
              youtubelink: idYT,
            });
          }}
        />
        {online == 'online' ? (
          <OutlineButton
            text={'View Tutorial'}
            onPress={() => {
              navigation.navigate('VideoScreen', {
                title: tutorialName,
                description: tutorialDes,
                youtubelink: tutorialVideoId,
              });
            }}
          />
        ) : null}
        <Text style={styles.description}>{description}</Text>
        <EventTittle text={'Event Details'} />
        <EventDetailText date={'Date:' + date} />
        <EventDetailText date={'Location:' + location} />

        <View>
          <EventDetailText date={'Doors Open: ' + openTime} />
          <EventDetailText date={'Event Start: ' + startTime} />
          <EventDetailText date={'Event Ends: ' + endTime} />
        </View>
        {online == 'upcomming' ? (
          <View>
            <EventTittle text={'Please Note.!'} />
            <Text style={styles.note}>
              *The event will be filmed and edited into a video shared on social
              media. Be aware that by purchasing a ticket for the event, you are
              in effect agreeing to the use of your recording and filmed
              material being used for the resulting video. **In addition, when
              you buy your ticket you will also have the option to donate money.
              All the money raised in the event will go directly to finance the
              purchase of emergency equipment. Still have questions? Below are
              answers to our most frequently asked questions.
            </Text>
          </View>
        ) : null}

        <SocialAccounts />
      </ScrollView>
    </SafeAreaView>
  );
}

export default PastEventDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },

  image: {
    height: 300,
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontFamily: Theme.boldFont,
    fontSize: 22,
    textAlign: 'center',
    marginLeft: Theme.wp * 0.03,
    marginRight: Theme.wp * 0.03,
    marginTop: Theme.hp * 0.01,
  },
  description: {
    color: 'grey',
    marginLeft: Theme.wp * 0.06,
    marginRight: Theme.wp * 0.05,
    fontSize: 17,
    marginTop: Theme.hp * 0.03,
  },

  note: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.01,
    textAlign: 'center',
    marginLeft: Theme.wp * 0.04,
    marginRight: Theme.wp * 0.04,
  },

  update: {
    marginLeft: Theme.wp * 0.85,
    // marginTop: Theme.hp * 0.02,
    marginBottom: Theme.hp * 0.02,
  },
});
