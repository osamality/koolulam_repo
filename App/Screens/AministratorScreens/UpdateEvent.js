import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import BackButton from '../../Components/BackButton';
import Theme from '../../Utils/Theme';
import AddEventFields from '../../Components/AddEventFields';
import AppButton from '../../Components/AppButton';
import {db} from '../../firebase/FirebaseConfig';
import {doc, updateDoc, setDoc} from 'firebase/firestore';
function UpdateEvent({route, navigation}) {
  const [tittle, setTittle] = useState('');
  const [id, setid] = useState('');
  const [date, setDate] = useState('');
  const [online, setOnline] = useState('');
  const [description, setdescription] = useState('');
  const [location, setLocation] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const [doorOpen, setDoorOpen] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  useEffect(() => {
    setDate(route.params?.date);
    setOnline(route.params?.online);
    setdescription(route.params?.description);
    setEndTime(route.params?.endTime);
    setYoutubeId(route.params?.idYT);
    setLocation(route.params?.location);
    setDoorOpen(route.params?.openTime);
    setStartTime(route.params?.startTime);
    setTittle(route.params?.tittle);
    setid(route.params?.id);
  }, []);
  const updatePreviousEvent = async () => {
    try {
      const eventRef = doc(db, 'PreviousEvents', id);
      await updateDoc(eventRef, {
        tittle: tittle,
        description: description,
        date: date,
        location: location,
        idYT: youtubeId,
        open: doorOpen,
        start: startTime,
        end: endTime,
      });
      console.log('documentUpdated');
      navigation.navigate('Gallery');
    } catch (error) {
      console.log(error);
    }
  };
  const updateUpCommingEvent = async () => {
    try {
      const eventRef = doc(db, 'UpcomingEvent', id);
      await updateDoc(eventRef, {
        tittle: tittle,
        description: description,
        date: date,
        location: location,
        idYT: youtubeId,
        open: doorOpen,
        start: startTime,
        end: endTime,
      });
      console.log('documentUpdated');
      navigation.navigate('EventCalender');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AddEventFields
            height={50}
            width={'80%'}
            tittle={'Tittle'}
            placeholder={'tittle'}
            lines={1}
            multiline={false}
            value={tittle}
            onChangeText={text => {
              setTittle(text);
            }}
          />
          <AddEventFields
            height={250}
            width={'80%'}
            tittle={'Description'}
            placeholder={'description'}
            lines={200}
            multiline={true}
            value={description}
            onChangeText={text => {
              setdescription(text);
            }}
          />
          <AddEventFields
            height={50}
            width={'80%'}
            tittle={'Date'}
            placeholder={'Date'}
            inputHeight={50}
            value={date}
            onChangeText={text => {
              setDate(text);
            }}
          />
          <AddEventFields
            height={50}
            width={'80%'}
            tittle={'Location'}
            placeholder={'location'}
            inputHeight={50}
            value={location}
            onChangeText={text => {
              setLocation(text);
            }}
          />
          <AddEventFields
            height={50}
            width={'80%'}
            tittle={'Youtube Id'}
            placeholder={'youtube id'}
            inputHeight={50}
            value={youtubeId}
            onChangeText={text => {
              setYoutubeId(text);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginTop: Theme.hp * 0.01,
            }}>
            <AddEventFields
              height={40}
              width={'90%'}
              tittle={'Door open'}
              placeholder={'time'}
              value={doorOpen}
              onChangeText={text => {
                setDoorOpen(text);
              }}
            />
            <AddEventFields
              height={40}
              width={'90%'}
              tittle={'Event start'}
              placeholder={'time'}
              value={startTime}
              onChangeText={text => {
                setStartTime(text);
              }}
            />
            <AddEventFields
              height={40}
              width={'90%'}
              tittle={'Event end'}
              placeholder={'time'}
              value={endTime}
              onChangeText={text => {
                setEndTime(text);
              }}
            />
          </View>
          {online == 'past' ? (
            <AppButton
              text={'Update previous event'}
              top={Theme.hp * 0.03}
              bottom={Theme.hp * 0.05}
              onPress={() => {
                updatePreviousEvent();
              }}
            />
          ) : null}
          {online == 'upcomming' ? (
            <AppButton
              text={'Update upComming Event'}
              top={Theme.hp * 0.03}
              bottom={Theme.hp * 0.05}
              onPress={() => {
                updateUpCommingEvent();
              }}
            />
          ) : null}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default UpdateEvent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: Theme.hp * 0.01,
    marginTop: Theme.hp * 0.03,
    alignSelf: 'center',
    fontWeight: '600',
  },
  modal: {
    flex: 0.16,
    backgroundColor: 'white',
    // borderTopLeftRadius: 20,
    // borderBottomRightRadius: 20,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  cont: {
    alignItems: 'center',
    //backgroundColor: 'red',
    height: 60,
  },
  image: {
    height: 300,
    width: '90%',
    alignSelf: 'center',
    marginBottom: Theme.hp * 0.03,
  },
});
