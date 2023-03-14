import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {LIGHT_GREY, WHITE} from '../../../shared/constants/colors';
import {homeCardStyles} from './styles';
import {
  WARNINGSCREEN_CARD,
  WHAT_MOST_BABIES_DO,
  WHAT_PARENT_DO,
} from '../../../shared/constants/homeConstants/childConstants';

const CardContent = ({navigation, route}) => {
  console.log(route?.params?.cardName);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <FlatList
        data={route?.params?.cardName}
        renderItem={({item}) => {
          return (
            <View style={homeCardStyles.container}>
              <Text style={homeCardStyles.titleText}>{item?.TITLE}</Text>
              <View style={homeCardStyles.tabCardContainer}>
                <View style={homeCardStyles.tabContainer}>
                  {item?.IMAGE}
                  <Text style={homeCardStyles.tabText}>{item?.CONTENT}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CardContent;
