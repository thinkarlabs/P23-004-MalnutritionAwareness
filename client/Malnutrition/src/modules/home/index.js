import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import AppHeader from '../../shared/components/appHeader';
import {APP_NAME} from '../../shared/constants/constants';
import {homeScreenSync as homeScreenSyncAction} from './Actions';
import ChildHomeScreen from './child';
import PregnantWomenHomeScreen from './pregnantWoman';
import {homeStyles} from './styles';

const Home = ({navigation, homeScreenSync, syncData}) => {
  useEffect(() => {
    homeScreenSync();
  }, []);

  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <AppHeader title={APP_NAME} />
      {syncData?.child_details == null ? (
        <PregnantWomenHomeScreen data={syncData} navigation={navigation} />
      ) : (
        <ChildHomeScreen data={syncData} navigation={navigation} />
      )}
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  homeScreenSync: () => dispatch(homeScreenSyncAction()),
});

const mapStateToProps = state => ({
  syncData: state?.homeScreen?.syncData,
  errorText: state?.homeScreen?.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
