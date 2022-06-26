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
import {login} from '../Services/AuthService';
import {Formik} from 'formik';
import {loginValidationSchema} from '../Utils/ValidationSchema';

function LoginScreen(props) {
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
          <HeadingText text={'Sign In'} top={Theme.hp * 0.05} />
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginValidationSchema}
            onSubmit={values => {
              login(values);
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
                  <EditInput
                    placeholder={'Email'}
                    name={'alternate-email'}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                  />
                  <ErrorMessage error={errors.email} visible={touched.email} />
                  <PasswordInput
                    placeholder={'Password'}
                    name={'lock'}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                  />
                  <ErrorMessage
                    error={errors.password}
                    visible={touched.password}
                  />
                </View>
                <AppButton
                  text={'Sign In'}
                  top={Theme.hp * 0.1}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>

          <MiddleText text={"Don't have an account?"} />
          <AppButton
            text={'Join'}
            top={Theme.hp * 0.02}
            onPress={() => props.navigation.navigate('Register')}
          />
          <SocialAccounts />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
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
    marginTop: Theme.hp * 0.03,
  },
});
