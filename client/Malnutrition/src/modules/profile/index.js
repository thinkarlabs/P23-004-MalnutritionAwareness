import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN} from '../../shared/constants/navigatorConstants';
import AppHeader from '../../shared/components/appHeader';
import {profileStyles} from './styles';

const Profile = ({navigation}) => {
  const onPressLogout = () => {
    AsyncStorage.removeItem('TOKEN');
    navigation.navigate(LOGIN);
  };
  return (
    <SafeAreaView style={profileStyles.screenContainer}>
      <AppHeader title={'Aadarshini'} />
      <View style={{marginHorizontal: 20}}>
        <Button
          title={'Logout'}
          textStyle={buttonStyles.buttonText}
          buttonStyle={buttonStyles.container}
          onPress={onPressLogout}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
