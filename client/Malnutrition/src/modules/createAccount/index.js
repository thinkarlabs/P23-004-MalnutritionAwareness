import {View, Text, SafeAreaView, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CREATE_ACCOUNT} from '../../shared/Constants/constants';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {BLACK, PINK, BUTTON} from '../../shared/Constants/colors';

const CreateAccount = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const setStage = stage => {
    setCurrentStage(stage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screenWrapper}>
        <Text style={styles.titleText}>
          {CREATE_ACCOUNT.SELECT_CURRENT_STAGE_TEXT}
        </Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0.4, y: 0}}
          colors={['#EBEFF1', '#ffffff']}
          style={[
            styles.stageCard,
            styles.leftSpacer,
            currentStage === 1 ? styles.stageOne : '',
          ]}>
          <TouchableOpacity onPress={() => setStage(1)}>
            <Text style={styles.cardTitle}>
              {CREATE_ACCOUNT.CATEGORY_1_TITLE}
            </Text>
            <Text style={styles.cardDesc}>
              {CREATE_ACCOUNT.CATEGORY_1_DESCRIPTION}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          start={{x: 0.6, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ffffff', '#EBEFF1']}
          style={[
            styles.stageCard,
            styles.rightSpacer,
            currentStage === 2 ? styles.stageTwo : '',
          ]}>
          <TouchableOpacity onPress={() => setStage(2)}>
            <Text style={styles.cardTitle}>
              {CREATE_ACCOUNT.CATEGORY_2_TITLE}
            </Text>
            <Text style={styles.cardDesc}>
              {CREATE_ACCOUNT.CATEGORY_2_DESCRIPTION}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0.4, y: 0}}
          colors={['#EBEFF1', '#ffffff']}
          style={[
            styles.stageCard,
            styles.leftSpacer,
            currentStage === 3 ? styles.stageThree : '',
          ]}>
          <TouchableOpacity onPress={() => setStage(3)}>
            <Text style={styles.cardTitle}>
              {CREATE_ACCOUNT.CATEGORY_3_TITLE}
            </Text>
            <Text style={styles.cardDesc}>
              {CREATE_ACCOUNT.CATEGORY_3_DESCRIPTION}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          style={[
            styles.Button,
            currentStage === 0 ? styles.buttonDisabled : '',
          ]}
          underlayColor={BUTTON.PRIMARY}>
          <Text style={styles.ButtonText}>Fill Your Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
