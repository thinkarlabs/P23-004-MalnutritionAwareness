import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ChildDetails from '../../../assets/svg/childDetails';
import UserBlackIcon from '../../../assets/svg/icons/userBlackIcon';
import WarningDetails from '../../../assets/svg/warningDetailSVG';
import WhatBabyDoIllustration from '../../../assets/svg/whatBabyDoSVG';
import WhatShouldIDoIllustration from '../../../assets/svg/whatShouldIDoSVG';
import {AppCard} from '../../shared/components/appCard';
import AppHeader from '../../shared/components/appHeader';
import {
  CARD_BLUE,
  WHITE,
  LIGHT_YELLOW,
  CARD_RED,
  CARD_BACKGROUND,
} from '../../shared/constants/colors';
import {
  APP_NAME,
  CREATE_ACCOUNT,
  HOMESCREEN,
} from '../../shared/constants/constants';
import {HOME_CARD} from '../../shared/constants/navigatorConstants';
import {createAccountStyles} from '../createAccount/styles';
import {homeStyles} from './styles';
import {homeScreenSync as homeScreenSyncAction} from './Actions';
import {AppVideoPlayer} from '../../shared/components/appVideoPlayer';

const Home = ({navigation, homeScreenSync, syncData}) => {
  const [videoId, setVideoId] = useState(false);

  useEffect(() => {
    homeScreenSync();
    const video = syncData?.video;
    setVideoId(video?.split('https://youtu.be/')?.pop());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <AppHeader title={APP_NAME} />
      <ScrollView style={{height: '75%'}}>
        <View style={homeStyles.container}>
          <View style={homeStyles.headingContainer}>
            <View style={homeStyles.profile}>
              <UserBlackIcon />
            </View>
            <Text style={homeStyles.headingText}>
              Aash is 2 months and 10 days old
            </Text>
          </View>
          <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          <AppVideoPlayer videoId={videoId} />
          <AppCard
            onPress={() => navigation.navigate(HOME_CARD.CONTENT1)}
            content={HOMESCREEN.CARD_CONTENT1}
            background={CARD_BLUE}
            image={<WhatBabyDoIllustration />}
            boxText={CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
          />
          <AppCard
            onPress={() => navigation.navigate(HOME_CARD.CONTENT2)}
            content={HOMESCREEN.CARD_CONTENT2}
            background={LIGHT_YELLOW}
            newStyle={createAccountStyles.rowReverse}
            image={<WhatShouldIDoIllustration />}
            boxText={CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
          />
          <AppCard
            onPress={() => navigation.navigate(HOME_CARD.CONTENT3)}
            content={HOMESCREEN.CARD_CONTENT3}
            background={CARD_RED}
            image={<WarningDetails />}
            boxText={CREATE_ACCOUNT.MOVE_FORWARD_TEXT}
          />
          <AppCard
            onPress={() => {}}
            content={HOMESCREEN.CARD_CONTENT4}
            background={CARD_BACKGROUND}
            image={<ChildDetails />}
            boxText={'Add your child detail'}
          />
        </View>
      </ScrollView>
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
