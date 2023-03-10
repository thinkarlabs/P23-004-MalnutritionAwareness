import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {HOME, TAB} from '../../../shared/constants/navigatorConstants';
import {CHILDSCREEN_CARD} from '../../../shared/constants/constants';
import {homeCardStyles} from './styles';
import {Image} from 'react-native';
import ChildIcon from '../../../../assets/svg/icons/childIcon';

const ChildCardContent = ({navigation}) => {
  return (
    <SafeAreaView>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <View style={homeCardStyles.container}>
        <Text style={homeCardStyles.titleText}>{CHILDSCREEN_CARD.TITLE}</Text>
        <View>{/* Video Player View */}</View>
        <View>{/* Carasoul list */}</View>
        <View style={{paddingTop: 28}}>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT1}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT2}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT3}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT4}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT5}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT6}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT7}
              </Text>
            </View>
          </View>
          <View style={homeCardStyles.tabCardContainer}>
            <View style={homeCardStyles.tabContainer}>
              <ChildIcon />
              <Text style={homeCardStyles.tabText}>
                {CHILDSCREEN_CARD.CARD_CONTENT8}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChildCardContent;
