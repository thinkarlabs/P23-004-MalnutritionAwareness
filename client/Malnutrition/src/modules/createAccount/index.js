import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {createAccountStyles} from './styles';
import AppHeader from '../../shared/components/appHeader';
import {CREATE_ACCOUNT} from '../../shared/constants/constants';
import {AppCard} from '../../shared/components/appCard';
import PregnantWomenImage from '../../../assets/svg/pregnantWomenSVG';
import LactatingMotherImage from '../../../assets/svg/lactatingMotherSVG';
import Child6MonthImage from '../../../assets/svg/6MonthChildSVG';
import {
  CHILDINFO_SCREEN,
  LOGIN,
  PREGNANTWOMAN_SCREEN,
} from '../../shared/constants/navigatorConstants';
import { CARD_BACKGROUND } from '../../shared/constants/colors';

const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView style={createAccountStyles.container}>
      <AppHeader
        title={CREATE_ACCOUNT.TITLE_SCREEN}
        backArrowValue={true}
        onPress={() => navigation.navigate(LOGIN)}
      />
      <ScrollView>
        <View style={createAccountStyles.screenWrapper}>
          <Text style={createAccountStyles.titleText}>
            {CREATE_ACCOUNT.SELECT_CURRENT_STAGE_TEXT}
          </Text>
          <AppCard
            onPress={() => {
              navigation.navigate(PREGNANTWOMAN_SCREEN, {
                title: CREATE_ACCOUNT.CATEGORY_1_TITLE,
                image: <PregnantWomenImage />,
              });
            }}
            title={CREATE_ACCOUNT.CATEGORY_1_TITLE}
            content={CREATE_ACCOUNT.CATEGORY_1_DESCRIPTION}
            image={<PregnantWomenImage />}
            background={CARD_BACKGROUND}
          />
          <AppCard
            onPress={() => {
              navigation.navigate(CHILDINFO_SCREEN, {
                title: CREATE_ACCOUNT.CATEGORY_2_TITLE,
              });
            }}
            title={CREATE_ACCOUNT.CATEGORY_2_TITLE}
            content={CREATE_ACCOUNT.CATEGORY_2_DESCRIPTION}
            image={<LactatingMotherImage />}
            newStyle={createAccountStyles.rowReverse}
            background={CARD_BACKGROUND}
          />
          <AppCard
            onPress={() => {
              navigation.navigate(CHILDINFO_SCREEN, {
                title: CREATE_ACCOUNT.CATEGORY_3_TITLE,
              });
            }}
            title={CREATE_ACCOUNT.CATEGORY_3_TITLE}
            content={CREATE_ACCOUNT.CATEGORY_3_DESCRIPTION}
            image={<Child6MonthImage />}
            background={CARD_BACKGROUND}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
