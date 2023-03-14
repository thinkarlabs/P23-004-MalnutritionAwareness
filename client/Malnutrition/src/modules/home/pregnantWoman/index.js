import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import UserBlackIcon from '../../../../assets/svg/icons/userBlackIcon';
import WhatBabyDoIllustration from '../../../../assets/svg/whatBabyDoSVG';
import WhatShouldIDoIllustration from '../../../../assets/svg/whatShouldIDoSVG';
import WarningDetails from '../../../../assets/svg/warningDetailSVG';
import ChildDetails from '../../../../assets/svg/childDetails';
import {useIsFocused} from '@react-navigation/native';
import {homeStyles} from '../styles';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import {AppCard} from '../../../shared/components/appCard';
import {HOME_CARD} from '../../../shared/constants/navigatorConstants';
import {CREATE_ACCOUNT, HOMESCREEN} from '../../../shared/constants/constants';
import {
  CARD_BACKGROUND,
  CARD_BLUE,
  CARD_RED,
  LIGHT_YELLOW,
  WHITE,
} from '../../../shared/constants/colors';
import {createAccountStyles} from '../../createAccount/styles';
import {getAgeFromDateOfBirth} from '../../../shared/Utils';
import {PREGNANTWOMEN_CARD} from '../../../shared/constants/homeConstants/parentConstants';

const PregnantWomenHomeScreen = ({
  navigation,
  homeScreenSync,
  syncData,
  data,
}) => {
  const [videoId, setVideoId] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    // homeScreenSync();
    setUserDetails(data);
    setVideoId(userDetails?.video?.split('https://youtu.be/')?.pop());
  }, [isFocused]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <ScrollView style={{height: '75%'}}>
        <View style={homeStyles.container}>
          <View style={homeStyles.headingContainer}>
            <View style={homeStyles.profile}>
              <UserBlackIcon />
            </View>
            <Text style={homeStyles.headingText}>
              {userDetails?.mother_details?.name} is{' '}
              {getAgeFromDateOfBirth(userDetails?.mother_details?.lmp).months}{' '}
              months and{' '}
              {getAgeFromDateOfBirth(userDetails?.mother_details?.lmp).days}{' '}
              days pregnant
            </Text>
          </View>
          <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          <AppVideoPlayer videoId={videoId} />
          <FlatList
            data={PREGNANTWOMEN_CARD}
            renderItem={({item}) => {
              return (
                <View>
                  <AppCard
                    // onPress={() => navigation.navigate(item.ONPRESS)}
                    content={item.CONTENT}
                    background={item.BACKGROUND}
                    image={item.IMAGE}
                    boxText={item.BOX_TEXT}
                    newStyle={item.STYLE}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PregnantWomenHomeScreen;
