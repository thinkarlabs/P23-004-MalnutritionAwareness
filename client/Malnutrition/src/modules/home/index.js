import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import AppHeader from '../../shared/components/appHeader';
import {WHITE} from '../../shared/constants/colors';
import {APP_NAME} from '../../shared/constants/constants';
import {homeScreenSync as homeScreenSyncAction} from './Actions';

const Home = ({navigation, homeScreenSync, syncData}) => {
  useEffect(() => {
    homeScreenSync();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <AppHeader title={APP_NAME} />
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  homeScreenSync: () => dispatch(homeScreenSyncAction()),
});

const mapStateToProps = state => ({
  syncData: state.homeScreen.syncData,
  errorText: state.homeScreen.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
