import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import BackButton from '../Components/BackButton';
import TicketButton from '../Components/TicketButton';
import SocialAccounts from '../Components/SocialAccounts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EventDetailText from '../Components/EventDetailText';
import EventTittle from '../Components/EventTittle';
import Theme from '../Utils/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

function EventDetail({route, navigation}) {
  const [role, setRole] = useState('');
  useEffect(() => {
    getRole();
  }, []);
  const getRole = async () => {
    const role = await AsyncStorage.getItem('role');
    console.log(role);
    setRole(role);
  };
  const image = route.params.image;
  const date = route.params.date;
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      {role == 'Admin' ? (
        <TouchableOpacity
          style={styles.update}
          onPress={() => navigation.navigate('UpdateEvent', {})}>
          <Icon name="update" color={'white'} size={30} />
        </TouchableOpacity>
      ) : null}
      <TicketButton />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>Event Title will be here</Text>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Text>
        <EventTittle text={'Event Details'} />
        <EventDetailText date={'Date:' + {date}} />
        <EventDetailText
          date={'Location: Ramat Hanadiv(between Binyamina Zihron Yaakov)'}
        />
        <EventDetailText date={'Doors Open: 12:00'} />
        <EventDetailText date={'Event Start: 13:00'} />
        <EventDetailText date={'Event Ends: 15:00'} />
        <EventTittle text={'Please Note.!'} />
        <Text style={styles.note}>
          *The event will be filmed and edited into a video shared on social
          media. Be aware that by purchasing a ticket for the event, you are in
          effect agreeing to the use of your recording and filmed material being
          used for the resulting video. **In addition, when you buy your ticket
          you will also have the option to donate money. All the money raised in
          the event will go directly to finance the purchase of emergency
          equipment. Still have questions? Below are answers to our most
          frequently asked questions.
        </Text>
        <SocialAccounts />
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetail;
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
    marginTop: Theme.hp * 0.02,
    marginBottom: Theme.hp * 0.02,
  },
});
