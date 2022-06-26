import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Theme from '../Utils/Theme';
import SettingComponent from '../Components/SettingComponent';
import {logout} from '../Services/AuthService';

function Settings(props) {
  return (
    <SafeAreaView style={styles.container}>
      <SettingComponent
        categorey="one"
        icon={'users-cog'}
        text={'My Profile'}
        onPress={() => props.navigation.navigate('UserProfile')}
      />
      <SettingComponent
        categorey="two"
        icon={'lock-reset'}
        text={'Change Password'}
        onPress={() => props.navigation.navigate('ChangePassword')}
      />
      <SettingComponent
        categorey="two"
        icon={'logout'}
        text={'Logout'}
        onPress={() => logout()}
      />
    </SafeAreaView>
  );
}

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.primaryColor,
  },
});
