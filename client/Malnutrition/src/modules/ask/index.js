import {Text, SafeAreaView, View, Linking, Platform} from 'react-native';
import React from 'react';
import AppHeader from '../../shared/components/appHeader';
import {askStyles} from './styles';
import {Button} from '../../shared/components/button';
import {buttonStyles} from '../../shared/components/button/styles';
import AskSvg from '../../../assets/svg/askSVG';
import {
  ASK_QUERIES_TEXT,
  TAP_TO_CONNECT,
} from '../../shared/constants/constants';

const Ask = () => {
  const sendWhatsappMessage = () => {
    let msg = 'Hello';
    let phoneWithCountryCode = 'xxxxxxxxxx';

    let mobile =
      Platform.OS === 'ios' ? phoneWithCountryCode : '+' + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened');
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please insert message to send');
      }
    } else {
      alert('Please insert mobile no');
    }
  };
  return (
    <SafeAreaView style={askStyles.screenContainer}>
      <AppHeader title={'Aadarshini'} />
      <View style={askStyles.container}>
        <View style={askStyles.innerContainer}>
          <AskSvg />
        </View>
        <View style={askStyles.innerContainer}>
          <Text style={askStyles.textStyle}>{ASK_QUERIES_TEXT}</Text>
          <Text style={askStyles.phoneNumber}>{'+91 9824063447'}</Text>
        </View>
        <Button
          title={TAP_TO_CONNECT}
          textStyle={buttonStyles.buttonText}
          buttonStyle={askStyles.buttonStyle}
          onPress={sendWhatsappMessage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Ask;
