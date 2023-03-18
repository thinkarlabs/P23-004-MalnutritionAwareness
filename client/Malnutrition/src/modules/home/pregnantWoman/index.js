import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import UserBlackIcon from '../../../../assets/svg/icons/userBlackIcon';
import {useIsFocused} from '@react-navigation/native';
import {homeStyles} from '../styles';
import {AppVideoPlayer} from '../../../shared/components/appVideoPlayer';
import {AppCard} from '../../../shared/components/appCard';
import {HOMESCREEN} from '../../../shared/constants/constants';
import {getAge} from '../../../shared/Utils';
import {PREGNANTWOMEN_CARD} from '../../../shared/constants/homeConstants/parentConstants';

const PregnantWomenHomeScreen = ({navigation, data}) => {
  const [videoId, setVideoId] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    setVideoId(data?.video?.split('https://youtu.be/')?.pop());
  }, [isFocused]);

  const name = data?.child_details
    ? data?.child_details?.name
    : data?.mother_details?.name;

  const age = data?.child_details
    ? `${getAge(data?.child_details?.dob)} old`
    : `${getAge(data?.mother_details?.lmp)} pregnant`;

  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <ScrollView
        style={homeStyles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={homeStyles.container}>
          <View style={homeStyles.headingContainer}>
            <View style={homeStyles.profile}>
              <UserBlackIcon />
            </View>
            <Text style={homeStyles.headingText}>
              {name} is {''}
              {age}
            </Text>
          </View>
          <Text style={homeStyles.homeText}>{HOMESCREEN.TITLE}</Text>
          <AppVideoPlayer videoId={videoId} />
          <FlatList
            data={PREGNANTWOMEN_CARD}
            renderItem={({item}) => {
              return (
                <View>
                  <AppCard
                    onPress={() =>
                      navigation.navigate(item?.onPress, {
                        data: item?.data,
                        title: item?.title,
                        video: videoId,
                      })
                    }
                    content={item?.content}
                    warningCardContent1={item?.content1}
                    warningCardContent2={item?.content2}
                    warningCardContent3={item?.content3}
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

export default PregnantWomenHomeScreen;
