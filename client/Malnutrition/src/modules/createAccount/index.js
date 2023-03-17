import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {createAccountStyles} from './styles';
import AppHeader from '../../shared/components/appHeader';
import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_CARD,
} from '../../shared/constants/constants';
import {AppCard} from '../../shared/components/appCard';
import {LOGIN} from '../../shared/constants/navigatorConstants';
import {FlatList} from 'react-native';

const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView style={createAccountStyles.container}>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(LOGIN)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={createAccountStyles.screenWrapper}>
          <Text style={createAccountStyles.titleText}>
            {CREATE_ACCOUNT.SELECT_CURRENT_STAGE_TEXT}
          </Text>
          <FlatList
            data={CREATE_ACCOUNT_CARD}
            renderItem={({item}) => {
              return (
                <View>
                  <AppCard
                    onPress={() =>
                      navigation.navigate(item?.onPress, {
                        title: item?.title,
                        image: item?.image,
                      })
                    }
                    title={item?.title}
                    content={item?.content}
                    image={item?.image}
                    background={item?.background}
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

export default CreateAccount;
