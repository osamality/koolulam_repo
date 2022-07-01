import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import Theme from '../Utils/Theme';
import HeadingText from '../Components/HeadingText';
import EditInput from '../Components/EditInput';
import PasswordInput from '../Components/PasswordInput';
import AppButton from '../Components/AppButton';
import MiddleText from '../Components/MiddleText';
import SocialAccounts from '../Components/SocialAccounts';
import ErrorMessage from '../Components/ErrorMessage';
import SelectDropdown from 'react-native-select-dropdown';
import { register } from '../Services/AuthService';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { registerValidationSchema } from '../Utils/ValidationSchema';

const selection = ['Customer', 'Admin'];

function RegisterScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.image}
            source={require('../Assets/Koolulam_Logo_White.png')}
            resizeMode="contain"
          />
          <HeadingText text={'Register'} top={Theme.hp * 0.05} />

          <Formik
            initialValues={{
              role: 'Customer',
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              city: '',
              language: '',
            }}
            validationSchema={registerValidationSchema}
            onSubmit={values => {
              register(values);
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
                <View style={styles.inputContainer}>
                  {/* <View style={styles.selectionCont}>
                    <Icon name="user-shield" color={'white'} size={20} />
                    <SelectDropdown
                      buttonStyle={styles.selection}
                      defaultButtonText="Select User"
                      buttonTextStyle={styles.selectionText}
                      dropdownStyle={styles.dropdown}
                      rowTextStyle={{ color: Theme.secondaryColor }}
                      data={selection}
                      onSelect={handleChange('role')}
                      buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem;
                      }}
                      rowTextForSelection={(item, index) => {
                        return item;
                      }}
                      onBlur={() => setFieldTouched('role')}
                    />
                    <Icon
                      name="caret-down"
                      color={'white'}
                      size={30}
                      style={{ marginLeft: Theme.wp * -0.07 }}
                    />
                  </View> */}
                  <EditInput
                    placeholder={'First name'}
                    name={'person-outline'}
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}
                    onBlur={() => setFieldTouched('firstName')}
                  />
                  <ErrorMessage
                    error={errors.firstName}
                    visible={touched.firstName}
                  />
                  <EditInput
                    placeholder={'Last name'}
                    name={'person-add-alt'}
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}
                    onBlur={() => setFieldTouched('lastName')}
                  />
                  <ErrorMessage
                    error={errors.lastName}
                    visible={touched.lastName}
                  />
                  <EditInput
                    placeholder={'Email Address'}
                    name={'alternate-email'}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  <ErrorMessage error={errors.email} visible={touched.email} />
                  <PasswordInput
                    placeholder={'Password'}
                    name={'lock'}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                  />
                  <ErrorMessage
                    error={errors.password}
                    visible={touched.password}
                  />
                  <EditInput
                    placeholder={'City of Residence'}
                    name={'add-location-alt'}
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={() => setFieldTouched('city')}
                  />
                  <ErrorMessage error={errors.city} visible={touched.city} />
                  <EditInput
                    placeholder={'Preffered Language'}
                    name={'language'}
                    value={values.language}
                    onChangeText={handleChange('language')}
                    onBlur={() => setFieldTouched('language')}
                  />
                  <ErrorMessage
                    error={errors.language}
                    visible={touched.language}
                  />
                </View>
                <AppButton
                  text={'Join'}
                  top={Theme.hp * 0.06}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>

          <MiddleText text={'Already have an account?'} />
          <AppButton
            text={'Sign In'}
            top={Theme.hp * 0.02}
            onPress={() => props.navigation.navigate('Login')}
          />
          <SocialAccounts />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: Theme.hp * 0.04,
  },
  inputContainer: {
    marginTop: Theme.hp * 0.01,
  },
  selectionCont: {
    width: '85%',
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    alignItems: 'center',
  },
  selection: {
    backgroundColor: 'transparent',
    width: '93%',
  },
  selectionText: {
    color: Theme.secondaryColor,
    fontSize: 20,
    textAlign: 'left',
    //fontWeight: 'bold',
  },
  dropdown: {
    borderRadius: 10,
    alignSelf: 'center',
    //marginTop: Theme.hp * 0.01,
  },
});
