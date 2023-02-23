import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppHeader from '../../shared/components/appHeader';
import {CREATE_ACCOUNT} from '../../shared/constants/constants';
import {AppCard} from '../../shared/components/appCard';
import PregnantWomenImage from '../../../assets/svg/pregnantWomenSVG';
import LactatingMotherImage from '../../../assets/svg/lactatingMotherSVG';
import Child6MonthImage from '../../../assets/svg/6MonthChildSVG';
import {BUTTON} from '../../shared/constants/colors';
import { CHILDINFO_SCREEN, LACTATINGMOTHER_SCREEN, PREGNANTWOMAN_SCREEN } from '../../shared/constants/navigatorConstants';

const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={CREATE_ACCOUNT.TITLE_SCREEN} />
      <ScrollView
        contentContainerStyle={Platform.select({
          ios: styles.scrollContainerIOS,
          android: styles.scrollContainer,
        })}>
        <View style={styles.screenWrapper}>
          <Text style={styles.titleText}>
            {CREATE_ACCOUNT.SELECT_CURRENT_STAGE_TEXT}
          </Text>
          <AppCard
            onPress={() => {navigation.navigate(PREGNANTWOMAN_SCREEN, {
              title: CREATE_ACCOUNT.CATEGORY_1_TITLE,
              image : <PregnantWomenImage/>
            })}}
            title={CREATE_ACCOUNT.CATEGORY_1_TITLE}
            content={CREATE_ACCOUNT.CATEGORY_1_DESCRIPTION}
            image={<PregnantWomenImage />}
          />
          <AppCard
            onPress={() => {navigation.navigate(LACTATINGMOTHER_SCREEN, {
              title: CREATE_ACCOUNT.CATEGORY_2_TITLE,
            })}}
            title={CREATE_ACCOUNT.CATEGORY_2_TITLE}
            content={CREATE_ACCOUNT.CATEGORY_2_DESCRIPTION}
            image={<LactatingMotherImage />}
            newStyle={styles.rowReverse}
          />
          <AppCard
            onPress={() => {navigation.navigate(CHILDINFO_SCREEN, {
              title: CREATE_ACCOUNT.CATEGORY_3_TITLE,
            })}}
            title={CREATE_ACCOUNT.CATEGORY_3_TITLE}
            content={CREATE_ACCOUNT.CATEGORY_3_DESCRIPTION}
            image={<Child6MonthImage />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;
