import React from 'react';
import {Text, SafeAreaView, View, Image, ScrollView} from 'react-native';
import PersonIcon from '../../../assets/svg/icons/personIcon';
import {AppCard} from '../../shared/components/appCard';
import AppHeader from '../../shared/components/appHeader';
import {
  BLACK,
  CARD_BLUE,
  WHITE,
  LIGHT_YELLOW,
  CARD_RED,
  CARD_BACKGROUND,
} from '../../shared/constants/colors';
import {HOMESCREEN, TITLE} from '../../shared/constants/constants';
import {createAccountStyles} from '../createAccount/styles';
import {homeStyles} from './styles';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <AppHeader title={TITLE} />
      <ScrollView contentContainerStyle={{paddingBottom: 92}}>
        <View style={homeStyles.container}>
          <View style={homeStyles.headingContainer}>
            <PersonIcon />
            <Text style={homeStyles.headingText}>
              Aadarshini is 2 months and 10 days old
            </Text>
          </View>

          <View style={homeStyles.homeTitle}>
            <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          </View>
          <View
            style={{
              width: 335,
              height: 195,
              backgroundColor: BLACK,
              borderRadius: 12,
              paddingTop: 12,
            }}
          />
          <View style={{width: '90%', paddingTop: 20}}>
            <AppCard
              content={HOMESCREEN.CARD_CONTENT1}
              background={CARD_BLUE}
            />
            <AppCard
              content={HOMESCREEN.CARD_CONTENT2}
              background={LIGHT_YELLOW}
              newStyle={createAccountStyles.rowReverse}
            />
            <AppCard content={HOMESCREEN.CARD_CONTENT3} background={CARD_RED} />
            <AppCard
              content={HOMESCREEN.CARD_CONTENT4}
              background={CARD_BACKGROUND}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
