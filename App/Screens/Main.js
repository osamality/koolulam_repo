import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Theme from '../Utils/Theme';
import Heading from '../Components/Heading';
import SocialAccounts from '../Components/SocialAccounts';
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
function Main(props) {
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [props, isFocused]);

  const getData = async () => {
    const firestore = getFirestore();
    const userId = await AsyncStorage.getItem('@id');
    const q = query(collection(firestore, 'users'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots

      if (doc.id == userId) {
        // console.log(doc.id, ' => ', doc.data());
        AsyncStorage.setItem('id', doc.id);
        AsyncStorage.setItem('firstName', doc.data().firstName);
        AsyncStorage.setItem('lastName', doc.data().lastName);
        AsyncStorage.setItem('city', doc.data().city);
        AsyncStorage.setItem('email', doc.data().email);
        AsyncStorage.setItem('language', doc.data().language);
        AsyncStorage.setItem('role', doc.data().role);
      }
    });
  };
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../Assets/backroundPic.jpg')}
        style={styles.background}>
        <Image
          source={require('../Assets/Koolulam_Logo_White.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Heading upperText={'A Social-Musical Initiative'} />
        <SocialAccounts />
        <ScrollView>
          <Text style={styles.text}>
            {' '}
            Koolulam is a social musical initiative aimed at empowering
            communities and strengthening the fabric of society. Through
            collaborative creative experiences, we bring together people of
            different backgrounds, cultures, faiths and geographies. Since our
            formation, we have shown how we can harness the power of musical
            harmony, and use it to inspire harmony in humanity. Hundreds of
            thousands of people have already joined the movement to create
            social change through musical cooperation.
            {'\n'}
            {'\n'}
            We specialize in bringing together large groups of people in-person
            or online in a unique artistic collaboration. For a few hours,
            participants step out of their comfort zone, awaken their senses,
            and set their voices free. We teach everyone to listen – to
            themselves and to one another – and then create something powerful
            together. Each of our events promotes an important social message
            such as inclusion, coexistence, or women’s empowerment. The message
            is woven throughout the entire process from song selection, to the
            musical arrangement, to teaching each vocal section, and finally
            performing together. We curate an experience that enables anyone, no
            matter his or her musical talents, to contribute to an inspiring
            production. We embrace every voice, find harmony in diversity, and
            demonstrate the incredible strength and possibilities of a community
            united in purpose.
            {'\n'}
            {'\n'}
            An academic study conducted by Dr. Weiss, based at David Yellin
            College of Education, found that participants find meaning in
            Koolulam events because they connect to others and create something
            more powerful and beautiful than any individual can create alone.
            The result is that participants feel a sense of belonging to a
            community where they are seen and heard. Over 350,000 people have
            already taken part in more than 250 Koolulam events around the
            world.
            {'\n'}
            {'\n'}
            Videos from our events have garnered more than 140 million views and
            found their way to global leaders, social influencers, and
            celebrities. Inspired by our breast-cancer awareness video of Let’s
            Get Loud, Jennifer Lopez and Shakira incorporated Koolulam’s
            arrangement into their 2020 Super Bowl halftime show. Koolulam has
            repeatedly been recognized for its positive social impact.
            {'\n'}
            {'\n'}
            In 2018, Asia Society awarded Koolulam its esteemed Game Changer
            Award in recognition of Koolulam’s activity in building bridges
            through song. The following year, UNESCO and the European
            Broadcasting Union selected Koolulam’s arrangement of One Day to be
            broadcasted on over 2,000 stations worldwide on World Radio Day,
            celebrating the theme of tolerance. Koolulam is setting out to prove
            that every person has the power and ability to create positive
            change.
            {'\n'}
            {'\n'}
            Mass singing events are just the beginning. We are now working to
            expand our impact through collaborative creations in other art forms
            that will allow us to reach even more people all over the world.
            Koolulam aspires to be a global engine for good, inspiring people,
            one song at a time, to add their voice to the movement. We believe
            that people have the strength and ability to change the reality in
            which they live, and that the community strengthens the individual
            by embracing and amplifying one’s voice. These are the ideals that
            we aim to inspire among our participants. This is what Koolulam
            stands for.
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Main;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '102%',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.03,
  },
  text: {
    color: 'white',
    width: '80%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingEnd: 20,
    left: '10%',
    backgroundColor: '#5f3368',
    fontFamily: Theme.simpleFont,
    fontSize: 18,
  },
});
