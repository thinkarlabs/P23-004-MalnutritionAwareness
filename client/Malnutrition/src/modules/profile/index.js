import {SafeAreaView} from 'react-native';
import React from 'react';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN} from '../../shared/constants/navigatorConstants';

const Profile = ({navigation}) => {
  const onPressLogout = () => {
    AsyncStorage.removeItem('TOKEN');
    navigation.navigate(LOGIN);
  };
  return (
    <SafeAreaView>
      <Button
        title={'Logout'}
        textStyle={buttonStyles.buttonText}
        buttonStyle={buttonStyles.container}
        onPress={onPressLogout}
      />
    </SafeAreaView>
  );
};

export default Profile;
