import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppHeader from '../../shared/components/appHeader';
import {loginStyles} from './styles';
import {
  CREATEACCOUNT,
  LOGIN,
  OTPVERIFICATION,
} from '../../shared/constants/navigatorConstants';
import AppTextInput from '../../shared/components/appTextInput';
import {PLACEHOLDER_COLOR} from '../../shared/constants/colors';
import PhoneIcon from '../../../assets/svg/icons/phoneIcon';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import {
  LOGIN_BOTTOM,
  LOGIN_CONTENT,
  LOGIN_DETAILS,
  LOGIN_TEXT,
  LOGIN_TITLE,
  SIGN_UP,
  USER_DETAILS,
} from '../../shared/constants/constants';
import {connect} from 'react-redux';
import {login as loginAction, hideError as hideErrorAction} from './Actions';

const Login = ({navigation, login, loginData, errorText, hideError}) => {
  const [isValidForm, setIsValidForm] = useState(false);
  const [formValues, setFormValues] = useState({
    phone_number: '',
    is_creation: false,
  });

  useEffect(() => {
    if (loginData && !errorText) {
      navigation.navigate(OTPVERIFICATION, {
        fromWhere: LOGIN_TEXT,
      });
    }
  }, [loginData, errorText, navigation]);

  const updatePhoneNumber = newVal => {
    hideError();
    validatePhoneNumber(newVal);
    setFormValues({...formValues, phone_number: '+91' + newVal});
  };

  const validatePhoneNumber = val => {
    if (formValues?.phone_number && val?.length === 10) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  };

  const onPressLogin = () => {
    if (!isValidForm) {
      return false;
    }
    login(formValues);
  };

  return (
    <SafeAreaView>
      <AppHeader />
      <ScrollView style={loginStyles.scrollView}>
        <View style={loginStyles.screenWrapper}>
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
            <View style={loginStyles.inputContainer}>
              <PhoneIcon />
              <AppTextInput
                newStyles={loginStyles.inputField}
                placeholder={USER_DETAILS.PHONE_NUMBER}
                keyboardType="numeric"
                maxLength={10}
                placeholderTextColor={PLACEHOLDER_COLOR}
                name="phone_number"
                changeText={updatePhoneNumber}
              />
            </View>
          </View>
        </View>
        {!!errorText && <Text style={loginStyles.errorText}>{errorText}</Text>}
      </ScrollView>
      <View style={loginStyles.buttonContainer}>
        <Button
          title={LOGIN_TEXT}
          textStyle={buttonStyles.buttonText}
          buttonStyle={buttonStyles.container}
          disabledStyle={buttonStyles.disabled}
          disabled={!isValidForm}
          onPress={onPressLogin}
        />
      </View>
      <View style={loginStyles.bottomContainer}>
        <Text style={loginStyles.info}>{LOGIN_BOTTOM}</Text>
        <TouchableOpacity>
          <Text
            style={loginStyles.infoBold}
            onPress={() => navigation.navigate(CREATEACCOUNT)}>
            {' '}
            {SIGN_UP}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const mapDispatchToProps = dispatch => ({
  login: formValues => dispatch(loginAction(formValues)),
  hideError: () => dispatch(hideErrorAction()),
});

const mapStateToProps = state => ({
  loginData: state.login.loginData,
  errorText: state.login.errorText,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
