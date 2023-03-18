import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN} from '../../shared/constants/navigatorConstants';
import AppHeader from '../../shared/components/appHeader';
import {profileStyles} from './styles';
import {connect} from 'react-redux';
import {getAge} from '../../shared/Utils';

const Profile = ({navigation, syncData}) => {
  const name = syncData?.child_details
    ? syncData?.child_details?.name
    : syncData?.mother_details?.name;

  const age = syncData?.child_details
    ? `${getAge(syncData?.child_details?.dob)} old`
    : `${getAge(syncData?.mother_details?.lmp)} pregnant`;

  const onPressLogout = () => {
    AsyncStorage.removeItem('TOKEN');
    navigation.navigate(LOGIN);
  };
  return (
    <SafeAreaView style={profileStyles.screenContainer}>
      <AppHeader title={name} subTitle={age} />
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

const mapStateToProps = state => ({
  syncData: state?.homeScreen?.syncData,
});

export default connect(mapStateToProps, null)(Profile);
