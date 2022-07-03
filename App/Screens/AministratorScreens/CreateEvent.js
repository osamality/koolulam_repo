import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Theme from '../../Utils/Theme';
import Heading from '../../Components/Heading';
import AddEventFields from '../../Components/AddEventFields';
import * as ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import CIcon from 'react-native-vector-icons/Octicons';
import BIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import GIcon from 'react-native-vector-icons/Fontisto';
import AppButton from '../../Components/AppButton';
import ErrorMessage from '../../Components/ErrorMessage';
import SelectDropdown from 'react-native-select-dropdown';
import {
  createUpcomingEvent,
  createLiveEvent,
  createPreviousEvent,
} from '../../Services/EventService';
import { Formik } from 'formik';
import {
  eventValidationSchema,
  liveEventValidationSchema,
} from '../../Utils/ValidationSchema';
import Helpers from '../../Utils/Helpers';
import storage from '@react-native-firebase/storage';

const generateRef = () => {
  var merchant_reference = "T-" + new Date().getTime();
  return merchant_reference;
}

function CreateEvent({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [filePath, setFilePath] = useState();
  const [type, setType] = useState('Upcomming event');
  const [imageName, setImageName] = useState(`${generateRef()}`);

  const reference = storage().ref(imageName);

  console.log(type)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    //toggleModal();
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      ImagePicker.launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }

        setFilePath(response.assets[0].uri);
        toggleModal();
      });
    }
  };
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };

    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      const uri = response.assets[0].uri;
      console.log('my assets', response.assets[0]);
      setFilePath(uri);
      toggleModal();
    });
  };

  // useEffect(() => {
  //   const pathToFile = `${filePath}`;
  //   // uploads file
  //   const task = reference.putFile(pathToFile);

  //   task.on('state_changed', taskSnapshot => {
  //     console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
  //   });

  //   task.then(() => {
  //     Helpers.showToastMessage('Image uploaded to the bucket!')
  //     console.log('Image uploaded to the bucket!');
  //   });
  // }, [filePath])

  const submit = async (values) => {
    console.log('-=-==-=-', values)

    // if (filePath == null) {
    //   Helpers.showToastMessage('Please Select a Image/Cover for you Event.')
    //   return
    // }

    type == 'Upcomming event'
      ? createUpcomingEvent(values)
      : type == 'Live event'
        ? createLiveEvent(values)
        : type == 'Past event'
          ? createPreviousEvent(values)
          : null;

  }

  return (
    <SafeAreaView style={styles.container}>
      <Heading upperText={'Create new Event'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={{
              type: '',
              tittle: '',
              description: '',
              date: '',
              location: '',
              idYT: '',
              open: '',
              start: '',
              end: '',
              tutorialId: '',
              tutorialName: '',
              tutorialDes: '',
              ticketLink: '',
              image: imageName,
            }}
            validationSchema={
              type == 'Live event' && type == 'Upcomming event'
                ? liveEventValidationSchema
                : eventValidationSchema
            }
            onSubmit={values => {
              submit(values)
            }}>
            {({
              handleChange,
              handleSubmit,
              errors,
              values,
              setFieldTouched,
              touched,
            }) => (
              <>
                <View style={{ flex: 1 }}>
                  <SelectDropdown
                    buttonStyle={styles.selection}
                    defaultButtonText="Type of event"
                    buttonTextStyle={styles.selectionText}
                    dropdownStyle={styles.dropdown}
                    rowTextStyle={{ color: Theme.secondaryColor }}
                    data={selection}
                    onSelect={handleChange('type')}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      console.log('-==--=-selectedItem', selectedItem)
                      if (selectedItem == 'Live event') {
                        setType('Live event');
                      } else if (selectedItem == 'Upcomming event') {
                        setType('Upcomming event');
                      } else if (selectedItem == 'Past event') {
                        setType('Past event');
                      }
                      return selectedItem;
                    }}
                    rowTextForSelection={(item, index) => {
                      return item;
                    }}
                    onBlur={() => setFieldTouched('type')}
                  />
                  <ErrorMessage error={errors.type} visible={touched.type} />
                  <AddEventFields
                    height={50}
                    width={'80%'}
                    tittle={'Add Tittle'}
                    placeholder={'tittle'}
                    lines={1}
                    multiline={false}
                    value={values.tittle}
                    onChangeText={handleChange('tittle')}
                    onBlur={() => setFieldTouched('tittle')}
                  />
                  <ErrorMessage
                    error={errors.tittle}
                    visible={touched.tittle}
                  />
                  <AddEventFields
                    height={250}
                    width={'80%'}
                    tittle={'Add Description'}
                    placeholder={'description'}
                    lines={200}
                    multiline={true}
                    value={values.description}
                    onChangeText={handleChange('description')}
                    onBlur={() => setFieldTouched('description')}
                  />
                  <ErrorMessage
                    error={errors.description}
                    visible={touched.description}
                  />
                  <AddEventFields
                    height={50}
                    width={'80%'}
                    tittle={'Add Date'}
                    placeholder={'Date'}
                    inputHeight={50}
                    value={values.date}
                    onChangeText={handleChange('date')}
                    onBlur={() => setFieldTouched('date')}
                  />
                  <ErrorMessage error={errors.date} visible={touched.date} />
                  <AddEventFields
                    height={50}
                    width={'80%'}
                    tittle={'Add Location'}
                    placeholder={'location'}
                    inputHeight={50}
                    value={values.location}
                    onChangeText={handleChange('location')}
                    onBlur={() => setFieldTouched('location')}
                  />
                  <ErrorMessage
                    error={errors.location}
                    visible={touched.location}
                  />
                  <AddEventFields
                    height={50}
                    width={'80%'}
                    tittle={'Add Youtube'}
                    placeholder={'id'}
                    inputHeight={50}
                    value={values.idYT}
                    onChangeText={handleChange('idYT')}
                    onBlur={() => setFieldTouched('idYT')}
                  />
                  <ErrorMessage error={errors.idYT} visible={touched.idYT} />
                  {type == 'Live event' ? (
                    <View>
                      <AddEventFields
                        height={50}
                        width={'80%'}
                        tittle={'Add Toutorial Video'}
                        placeholder={'id'}
                        inputHeight={50}
                        value={values.tutorialId}
                        onChangeText={handleChange('tutorialId')}
                        onBlur={() => setFieldTouched('tutorialId')}
                      />
                      <ErrorMessage
                        error={errors.tutorialId}
                        visible={touched.tutorialId}
                      />
                      <AddEventFields
                        height={50}
                        width={'80%'}
                        tittle={'Add Toutorial name'}
                        placeholder={'name'}
                        inputHeight={50}
                        value={values.tutorialName}
                        onChangeText={handleChange('tutorialName')}
                        onBlur={() => setFieldTouched('tutorialName')}
                      />
                      <ErrorMessage
                        error={errors.tutorialName}
                        visible={touched.tutorialName}
                      />
                      <AddEventFields
                        height={150}
                        width={'80%'}
                        tittle={'Add Toutorial description'}
                        placeholder={'description'}
                        inputHeight={50}
                        lines={200}
                        multiline={true}
                        value={values.tutorialDes}
                        onChangeText={handleChange('tutorialDes')}
                        onBlur={() => setFieldTouched('tutorialDes')}
                      />
                      <ErrorMessage
                        error={errors.tutorialDes}
                        visible={touched.tutorialDes}
                      />
                    </View>
                  ) : null}
                  {type == 'Upcomming event' || type == 'Live event' ? (
                    <View>
                      <AddEventFields
                        height={50}
                        width={'80%'}
                        tittle={'Add Ticket link'}
                        placeholder={'link'}
                        inputHeight={50}
                        value={values.ticketLink}
                        onChangeText={handleChange('ticketLink')}
                        onBlur={() => setFieldTouched('ticketLink')}
                      />
                      <ErrorMessage
                        error={errors.ticketLink}
                        visible={touched.ticketLink}
                      />
                    </View>
                  ) : null}
                  <View style={styles.timeContainer}>
                    <View>
                      <AddEventFields
                        height={40}
                        width={'90%'}
                        tittle={'Door open'}
                        placeholder={'time'}
                        value={values.open}
                        onChangeText={handleChange('open')}
                        onBlur={() => setFieldTouched('open')}
                      />
                      <ErrorMessage
                        error={errors.open}
                        visible={touched.open}
                      />
                    </View>
                    <View>
                      <AddEventFields
                        height={40}
                        width={'90%'}
                        tittle={'Event start'}
                        placeholder={'time'}
                        value={values.start}
                        onChangeText={handleChange('start')}
                        onBlur={() => setFieldTouched('start')}
                      />
                      <ErrorMessage
                        error={errors.start}
                        visible={touched.start}
                      />
                    </View>
                    <View>
                      <AddEventFields
                        height={40}
                        width={'90%'}
                        tittle={'Event end'}
                        placeholder={'time'}
                        value={values.end}
                        onChangeText={handleChange('end')}
                        onBlur={() => setFieldTouched('end')}
                      />
                      <ErrorMessage error={errors.end} visible={touched.end} />
                    </View>
                  </View>

                  <Text style={styles.text}>Add Image</Text>
                  <TouchableOpacity
                    style={styles.cont}
                    onPress={toggleModal}
                  //onPress={() => props.navigation.navigate('CameraExample')}
                  >
                    <CIcon
                      name="device-camera"
                      color={Theme.secondaryColor}
                      size={35}
                    />
                  </TouchableOpacity>
                  {filePath ? (
                    <Image source={{ uri: filePath }} style={styles.image} />
                  ) : (
                    <Text style={styles.imageText}>Image Is Required</Text>
                  )}

                  <AppButton
                    text={
                      type == 'Upcomming event'
                        ? 'Add Upcomming Event'
                        : type == 'Live event'
                          ? 'Add Live event'
                          : 'Add Past event'
                    }
                    top={Theme.hp * 0.02}
                    bottom={Theme.hp * 0.07}
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>

          <Modal
            isVisible={isModalVisible}
            onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modal}>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => {
                  captureImage('photo');
                }}>
                <BIcon
                  name="camera-plus"
                  color={Theme.secondaryColor}
                  size={30}
                />
                <Text
                  style={{
                    marginTop: Theme.hp * 0.01,
                    color: Theme.secondaryColor,
                  }}>
                  Open Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => {
                  chooseFile('photo');
                }}>
                <GIcon
                  name="photograph"
                  color={Theme.secondaryColor}
                  size={30}
                />
                <Text
                  style={{
                    marginTop: Theme.hp * 0.01,
                    color: Theme.secondaryColor,
                  }}>
                  Choose from gallery
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const selection = ['Upcomming event', 'Live event', 'Past event'];
export default CreateEvent;
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
  selection: {
    width: '80%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    marginTop: Theme.hp * 0.02,
  },
  selectionText: {
    color: Theme.secondaryColor,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown: {
    borderRadius: 10,
    alignSelf: 'center',
    //marginTop: Theme.hp * 0.01,
  },
  imageText: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: Theme.hp * 0.01,
  },
});
