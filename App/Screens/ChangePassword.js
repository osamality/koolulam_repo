import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Heading from '../Components/Heading';
import EditInput from '../Components/EditInput';
import ErrorMessage from '../Components/ErrorMessage';
import AppButton from '../Components/AppButton';
import Theme from '../Utils/Theme';
import {Formik} from 'formik';
import {changePasswordValidationSchema} from '../Utils/ValidationSchema';
import {changePassword} from '../Services/AuthService';

function ChangePassword(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading upperText={'Please Enter a registered email'} />
      <Formik
        initialValues={{email: ''}}
        onSubmit={values => {
          changePassword(values);
        }}
        validationSchema={changePasswordValidationSchema}>
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
                placeholder={'Enter email'}
                name={'alternate-email'}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppButton
                text={'Send Email'}
                top={Theme.hp * 0.1}
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default ChangePassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
  inputContainer: {
    marginTop: Theme.hp * 0.1,
  },
});
