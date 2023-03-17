import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import UserBlackIcon from '../../../../assets/svg/icons/userBlackIcon';
import {AppCard} from '../../../shared/components/appCard';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import {HOMESCREEN} from '../../../shared/constants/constants';
import {CHILDSCREEN_CARD} from '../../../shared/constants/homeConstants/childConstants';
import {getAgeFromDateOfBirth} from '../../../shared/Utils';
import {homeStyles} from '../styles';

const ChildHomeScreen = ({navigation, data}) => {
  const [videoId, setVideoId] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setVideoId(data?.video?.split('https://youtu.be/')?.pop());
  }, [isFocused]);

  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <ScrollView style={homeStyles.scrollView}>
        <View style={homeStyles.container}>
          <View style={homeStyles.headingContainer}>
            <View style={homeStyles.profile}>
              <UserBlackIcon />
            </View>
            <Text style={homeStyles.headingText}>
              {data?.mother_details?.name} is{' '}
              {getAgeFromDateOfBirth(data?.child_details?.lmp).months} months
              and {getAgeFromDateOfBirth(data?.child_details?.lmp).days} days
              old
            </Text>
          </View>
          <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          <AppVideoPlayer videoId={videoId} />
          <FlatList
            data={CHILDSCREEN_CARD}
            renderItem={({item}) => {
              return (
                <View>
                  <AppCard
                    onPress={() =>
                      navigation.navigate(item?.onPress, {
                        data: item?.data,
                      })
                    }
                    content={item?.content}
                    background={item?.background}
                    image={item?.image}
                    boxText={item?.boxText}
                    newStyle={item?.style}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChildHomeScreen;
