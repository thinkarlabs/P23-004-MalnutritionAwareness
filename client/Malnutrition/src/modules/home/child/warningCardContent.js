import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {homeCardStyles} from './styles';
import {HOMESCREEN} from '../../../shared/constants/constants';
import {AppCard} from '../../../shared/components/appCard';
import {CARD_RED} from '../../../shared/constants/colors';
import WarningScreenCard from '../../../../assets/svg/warningScreenCardSVG';
import SwipeRightIcon from '../../../../assets/svg/icons/swipeRightIcon';
import {WARNINGSCREEN_CARD} from '../../../shared/constants/homeConstants/childConstants';
import {homeStyles} from '../styles';
import CarouselComponent from '../../../shared/components/CarouselComponent';

const WarningCardContent = ({navigation, route}) => {
  console.log('daaaaa', route?.params?.data);
  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <View style={homeCardStyles.container}>
        <Text style={homeCardStyles.titleText}>{WARNINGSCREEN_CARD.title}</Text>
        <ScrollView
          style={homeCardStyles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={homeCardStyles.cardContainer}>
            <AppCard
              content={WARNINGSCREEN_CARD.content}
              image={<WarningScreenCard />}
              background={CARD_RED}
              boxContainer={false}
            />
          </View>
          <CarouselComponent data={route?.params?.data} />
          <View style={homeCardStyles.carasoulContainer}>
            <SwipeRightIcon />
            <Text style={homeCardStyles.carasoulText}>
              {HOMESCREEN.CARASOUL_INSTRUCTION}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WarningCardContent;
