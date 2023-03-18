import {SafeAreaView} from 'react-native';
import React from 'react';
import AppHeader from '../../shared/components/appHeader';
import {trackHealthStyles} from './styles';
import {TopTabNavigator} from '../../navigators/TopTabNavigator';
import {connect} from 'react-redux';
import {getAge} from '../../shared/Utils';

const Track = ({syncData}) => {
  const name = syncData?.child_details
    ? syncData?.child_details?.name
    : syncData?.mother_details?.name;

  const age = syncData?.child_details
    ? `${getAge(syncData?.child_details?.dob)} old`
    : `${getAge(syncData?.mother_details?.lmp)} pregnant`;

  return (
    <SafeAreaView style={trackHealthStyles.screenContainer}>
      <AppHeader title={name} subTitle={age} />
      <TopTabNavigator />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  syncData: state?.homeScreen?.syncData,
});

export default connect(mapStateToProps, null)(Track);
