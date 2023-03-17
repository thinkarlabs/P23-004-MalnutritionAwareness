import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import SwipeRightIcon from '../../../../assets/svg/icons/swipeRightIcon';
import {HOMESCREEN} from '../../../shared/constants/constants';
import {homeCardStyles} from '../child/styles';
import {homeStyles} from '../styles';

const PregnantWomanCardContent = ({navigation, route}) => {
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
          <View style={homeCardStyles.swipeContainer}>
            <SwipeRightIcon />
            <Text style={homeCardStyles.carasoulText}>
              {HOMESCREEN.CARASOUL_INSTRUCTION}
            </Text>
          </View>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PregnantWomanCardContent;
