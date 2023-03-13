import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {homeCardStyles} from './styles';
import {
  HOMESCREEN,
  PARENTSCREEN_CARD,
} from '../../../shared/constants/constants';
import ChildIcon from '../../../../assets/svg/icons/childIcon';
import SwipeRightIcon from '../../../../assets/svg/icons/swipeRightIcon';

const ParentCardContent = ({navigation}) => {
  return (
    <SafeAreaView>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 40}}>
        <View style={homeCardStyles.container}>
          <Text style={homeCardStyles.titleText}>
            {PARENTSCREEN_CARD.TITLE}
          </Text>
          <View>{/* Video Player View */}</View>
          <View>
            {/* Carasoul list */}
            {/* <View style={homeCardStyles.carasoulContainer}>
            <SwipeRightIcon />
            <Text style={homeCardStyles.carasoulText}>{HOMESCREEN.CARASOUL_INSTRUCTION}</Text>
          </View> */}
          </View>
          <View style={{paddingTop: 28}}>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT1}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT2}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT3}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT4}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT5}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT6}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT7}
                </Text>
              </View>
            </View>
            <View style={homeCardStyles.tabCardContainer}>
              <View style={homeCardStyles.tabContainer}>
                <ChildIcon />
                <Text style={homeCardStyles.tabText}>
                  {PARENTSCREEN_CARD.CARD_CONTENT8}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ParentCardContent;
