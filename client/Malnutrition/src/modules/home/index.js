import React from 'react';
import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import PersonIcon from '../../../assets/svg/icons/personIcon';
import PregnantWomenImage from '../../../assets/svg/pregnantWomenSVG';
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
import {APP_NAME, HOMESCREEN} from '../../shared/constants/constants';
import {createAccountStyles} from '../createAccount/styles';
import {homeStyles} from './styles';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <AppHeader title={APP_NAME} />
      <ScrollView style={{height: '75%'}}>
        <View style={homeStyles.container}>
          <View style={homeStyles.headingContainer}>
            <PersonIcon />
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
            onPress={() => {}}
            content={HOMESCREEN.CARD_CONTENT1}
            background={CARD_BLUE}
            image={<PregnantWomenImage />}
          />
          <AppCard
            onPress={() => {}}
            content={HOMESCREEN.CARD_CONTENT2}
            background={LIGHT_YELLOW}
            newStyle={createAccountStyles.rowReverse}
            image={<PregnantWomenImage />}
          />
          <AppCard
            onPress={() => {}}
            content={HOMESCREEN.CARD_CONTENT3}
            background={CARD_RED}
            image={<PregnantWomenImage />}
          />
          <AppCard
            onPress={() => {}}
            content={HOMESCREEN.CARD_CONTENT4}
            background={CARD_BACKGROUND}
            newStyle={createAccountStyles.rowReverse}
            image={<PregnantWomenImage />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
