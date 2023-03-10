import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {homeCardStyles} from './styles';
import {HOMESCREEN, WARNINGSCREEN_CARD} from '../../../shared/constants/constants';
import {AppCard} from '../../../shared/components/appCard';
import {CARD_RED} from '../../../shared/constants/colors';
import WarningScreenCard from '../../../../assets/svg/warningScreenCardSVG';
import SwipeRightIcon from '../../../../assets/svg/icons/swipeRightIcon';

const WarningCardContent = ({navigation}) => {
  return (
    <SafeAreaView>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <ScrollView>
        <View style={homeCardStyles.container}>
          <Text style={homeCardStyles.titleText}>
            {WARNINGSCREEN_CARD.TITLE}
          </Text>
          <View style={homeCardStyles.cardContainer}>
            <AppCard
              content={WARNINGSCREEN_CARD.CARD_CONTENT1}
              image={<WarningScreenCard />}
              background={CARD_RED}
              boxContainer={false}
            />
          </View>
          <View style={homeCardStyles.carasoulContainer}>
            <SwipeRightIcon />
            <Text style={homeCardStyles.carasoulText}>{HOMESCREEN.CARASOUL_INSTRUCTION}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WarningCardContent;
