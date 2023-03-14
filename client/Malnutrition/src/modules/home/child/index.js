import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ChildDetails from '../../../../assets/svg/childDetails';
import UserBlackIcon from '../../../../assets/svg/icons/userBlackIcon';
import WarningDetails from '../../../../assets/svg/warningDetailSVG';
import WhatBabyDoIllustration from '../../../../assets/svg/whatBabyDoSVG';
import WhatShouldIDoIllustration from '../../../../assets/svg/whatShouldIDoSVG';
import {AppCard} from '../../../shared/components/appCard';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import {
  CARD_BACKGROUND,
  CARD_BLUE,
  CARD_RED,
  LIGHT_YELLOW,
  WHITE,
} from '../../../shared/constants/colors';
import {CREATE_ACCOUNT, HOMESCREEN} from '../../../shared/constants/constants';
import {
  CHILDSCREEN_CARD,
  WHAT_MOST_BABIES_DO,
  WHAT_PARENT_DO,
} from '../../../shared/constants/homeConstants/childConstants';
import {HOME_CARD} from '../../../shared/constants/navigatorConstants';
import {getAgeFromDateOfBirth} from '../../../shared/Utils';
import {createAccountStyles} from '../../createAccount/styles';
import {homeStyles} from '../styles';

const ChildHomeScreen = ({navigation, data}) => {
  const [videoId, setVideoId] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
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
              {getAgeFromDateOfBirth(userDetails?.child_details?.lmp).months}{' '}
              months and{' '}
              {getAgeFromDateOfBirth(userDetails?.child_details?.lmp).days} days
              old
            </Text>
          </View>
          <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          <AppVideoPlayer videoId={videoId} />
          <FlatList
            data={CHILDSCREEN_CARD}
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

export default ChildHomeScreen;
