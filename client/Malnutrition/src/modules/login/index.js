import {Text, SafeAreaView, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppHeader from '../../shared/components/appHeader';
import {
  LOGIN_BOTTOM,
  LOGIN_CONTENT,
  LOGIN_DETAILS,
  LOGIN_TITLE,
  SIGN_UP,
  USER_DETAILS,
} from '../../shared/constants/constants';
import {loginStyles} from './styles';
import {LOGIN} from '../../shared/constants/navigatorConstants';
import AppTextInput from '../../shared/components/appTextInput';
import {PLACEHOLDER_COLOR} from '../../shared/constants/colors';
import PhoneIcon from '../../../assets/svg/icons/phoneIcon';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader />
      <View style={loginStyles.container}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/006/020/884/non_2x/leaf-circle-icon-free-vector.jpg',
          }}
          style={{height: 59, width: 59}}
        />
        <Text style={loginStyles.loginTitle}>{LOGIN_TITLE}</Text>
        <Text style={loginStyles.loginContent}>{LOGIN_CONTENT}</Text>
        <View style={loginStyles.detailContainer}>
          <Text style={loginStyles.detailText}>
            {LOGIN_DETAILS}
            <Text style={loginStyles.detailTextBold}> {LOGIN}</Text>
          </Text>
          <View style={{paddingTop: 4}}>
            <View style={loginStyles.inputContainer}>
              <View style={{paddingRight: 10}}>
                <PhoneIcon />
              </View>
              <AppTextInput
                newStyles={loginStyles.inputField}
                placeholder={USER_DETAILS.PHONE_NUMBER}
                keyboardType="numeric"
                maxLength={10}
                placeholderTextColor={PLACEHOLDER_COLOR}
                name="phone_number"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={loginStyles.buttonContainer}>
        <Button
          title={LOGIN}
          textStyle={buttonStyles.buttonText}
          onPress={() => {}}
        />
        <View style={loginStyles.bottomContainer}>
          <Text style={loginStyles.info}>{LOGIN_BOTTOM}</Text>
          <TouchableOpacity>
            <Text style={loginStyles.infoBold}> {SIGN_UP}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
