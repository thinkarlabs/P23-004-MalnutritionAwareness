import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppHeader from '../../shared/components/appHeader';
import {askStyles} from './styles';

const Ask = () => {
  return (
    <SafeAreaView style={askStyles.screenContainer}>
      <AppHeader title={'Aadarshini'} />
      <Text>Ask</Text>
    </SafeAreaView>
  );
};

export default Ask;
