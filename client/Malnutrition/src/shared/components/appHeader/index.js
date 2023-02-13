import React from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
import {Header} from 'react-native-elements';
import {WHITE} from '../../constants/colors';
import {OTPVERIFICATION} from '../../constants/navigatorConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppTextTranslates from '../appTextTranslate';

const AppHeader = ({navigation, canGoBack, title}) => {
  let leftComponent = null;
  let rightComponent = null;
  let centerComponent = null;

  leftComponent = (
    <TouchableOpacity onPress={() => navigation.navigate(OTPVERIFICATION)}>
      <AntDesign name="arrowright" size={24} />
    </TouchableOpacity>
  );

  centerComponent = (
    <View>
      <Text style={{fontSize: 20, fontWeight: 700}}>{title}</Text>
    </View>
  );

  rightComponent = <AppTextTranslates />;

  if (canGoBack) {
    return (
      <Header
        placement="left"
        backgroundColor={WHITE}
        leftComponent={leftComponent}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
        containerStyle={[
          Platform.select({
            ios: {paddingTop: 0, height: 100},
            android: {paddingTop: 0, height: 50},
          }),
          {
            paddingLeft: '5%',
          },
        ]}
      />
    );
  }
};

export default AppHeader;
