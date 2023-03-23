import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import SwipeRightIcon from '../../../../assets/svg/icons/swipeRightIcon';
import {HOMESCREEN} from '../../../shared/constants/constants';
import {homeCardStyles} from '../child/styles';
import {homeStyles} from '../styles';
import {EAT_HEALTH_FOOD_CONTENT} from '../../../shared/constants/homeConstants/parentConstants';

const PregnantWomanCardContent = ({navigation, route}) => {
  console.log('DEHJKHG',route?.params);
  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <View style={homeCardStyles.container}>
        <Text style={homeCardStyles.titleText}>{route?.params?.title}</Text>
        <ScrollView
          style={homeCardStyles.scrollView}
          showsVerticalScrollIndicator={false}>
          <AppVideoPlayer videoId={route?.params?.video} />
          <Text style={homeCardStyles.contentText}>
            {EAT_HEALTH_FOOD_CONTENT.CONTENT1}
          </Text>
          <View style={homeCardStyles.detailCard}>
            <Text
              style={homeCardStyles.detailCardText}>
              {EAT_HEALTH_FOOD_CONTENT.CARD_CONTENT}
            </Text>
          </View>
          <Text style={homeCardStyles.cardInstructionText}>{EAT_HEALTH_FOOD_CONTENT.CARD_INSTRUCTION}</Text>
          <View style={{paddingTop: 12}}>
          <FlatList
            scrollEnabled={false}
            data={route?.params?.data}
            renderItem={({item}) => {
              return (
                <View style={homeCardStyles.tabCardContainer}>
                  <View style={homeCardStyles.tabContainer}>
                    {item?.image}
                    <Text style={homeCardStyles.tabText}>{item?.content}</Text>
                  </View>
                </View>
              );
            }}
          />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PregnantWomanCardContent;
