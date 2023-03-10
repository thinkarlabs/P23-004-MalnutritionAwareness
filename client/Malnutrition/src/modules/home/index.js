import React from 'react';
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import ChildDetails from '../../../assets/svg/childDetails';
import PersonIcon from '../../../assets/svg/icons/personIcon';
import UserBlackIcon from '../../../assets/svg/icons/userBlackIcon';
import PregnantWomenImage from '../../../assets/svg/pregnantWomenSVG';
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
  LIGHT_GREY,
} from '../../shared/constants/colors';
import {APP_NAME, CREATE_ACCOUNT, HOMESCREEN} from '../../shared/constants/constants';
import { HOME_CARD } from '../../shared/constants/navigatorConstants';
import {createAccountStyles} from '../createAccount/styles';
import {homeStyles} from './styles';

const Home = ({navigation}) => {
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
              Aadarshini is 2 months and 10 days old
            </Text>
          </View>
          <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          <View
            style={{
              // width: 335,
              height: 195,
              backgroundColor: LIGHT_GREY,
              borderRadius: 12,
              marginVertical: 12,
            }}
          />
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

export default Home;
