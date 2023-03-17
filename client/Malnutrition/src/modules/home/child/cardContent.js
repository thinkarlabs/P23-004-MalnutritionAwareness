import {View, Text, FlatList, SafeAreaView} from 'react-native';
import React from 'react';
import AppHeader from '../../../shared/components/appHeader';
import {TAB} from '../../../shared/constants/navigatorConstants';
import {homeCardStyles} from './styles';
import {homeStyles} from '../styles';

const CardContent = ({navigation, route}) => {
  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <AppHeader
        backArrowValue={true}
        onPress={() => navigation.navigate(TAB)}
      />
      <FlatList
        data={route?.params?.data}
        renderItem={({item}) => {
          return (
            <View style={homeCardStyles.container}>
              <Text style={homeCardStyles.titleText}>{item?.title}</Text>
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
    </SafeAreaView>
  );
};

export default CardContent;
