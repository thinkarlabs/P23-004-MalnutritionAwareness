import {View, Text, FlatList, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {homeCardStyles} from './styles';
import {homeStyles} from '../styles';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import SwipeRightIcon from '../../../../assets/svg/icons/swipeRightIcon';
import {HOMESCREEN} from '../../../shared/constants/constants';
import CarouselComponent from '../../../shared/components/CarouselComponent';

const ChildCardContent = ({navigation, route}) => {
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
          <Text
            style={[
              homeCardStyles.titleText,
              {paddingBottom: 10, fontSize: 24},
            ]}>
            You can also read this here
          </Text>
          <CarouselComponent data={route?.params?.data.carouselItems} />
          <View style={homeCardStyles.swipeContainer}>
            <SwipeRightIcon />
            <Text style={homeCardStyles.carasoulText}>
              {HOMESCREEN.CARASOUL_INSTRUCTION}
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            data={route?.params?.data.actionList}
            renderItem={({item}) => {
              return (
                <View style={{paddingBottom: 8}}>
                <View style={homeCardStyles.tabCardContainer}>
                  <View style={homeCardStyles.tabContainer}>
                    {item?.image}
                    <Text style={homeCardStyles.tabText}>{item?.content}</Text>
                  </View>
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

export default ChildCardContent;
