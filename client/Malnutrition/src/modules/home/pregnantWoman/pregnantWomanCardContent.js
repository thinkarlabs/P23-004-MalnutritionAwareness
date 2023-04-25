import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import {homeCardStyles} from '../child/styles';
import {homeStyles} from '../styles';
import {
  EAT_HEALTHY_FOOD_CARD,
  EAT_HEALTH_FOOD_CONTENT,
} from '../../../shared/constants/homeConstants/parentConstants';
import FruitImage from '../../../../assets/svg/foods/fruitImage';

const PregnantWomanCardContent = ({navigation, route}) => {
  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <AppHeader
        backArrowValue={true}
        title={EAT_HEALTH_FOOD_CONTENT.HEADER_TITLE}
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
            <Text style={homeCardStyles.detailCardText}>
              {EAT_HEALTH_FOOD_CONTENT.CARD_CONTENT}
            </Text>
          </View>
          <Text style={homeCardStyles.cardInstructionText}>
            {EAT_HEALTH_FOOD_CONTENT.CARD_INSTRUCTION}
          </Text>
          {EAT_HEALTHY_FOOD_CARD.map(data => {
            return (
              <View style = {{paddingTop: 12}}>
                <View style={homeCardStyles.tabCardContainer}>
                  <View style={homeCardStyles.tabContainer}>
                    {data?.image}
                    <Text style={homeCardStyles.tabText}>{data?.content}</Text>
                  </View>
                  <View style={{padding: 12}}>{data?.picture}</View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PregnantWomanCardContent;
