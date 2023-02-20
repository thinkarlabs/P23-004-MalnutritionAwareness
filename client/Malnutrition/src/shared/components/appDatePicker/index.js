import {View, TouchableOpacity, Text, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {styles} from './styles';
import { USER_DETAILS } from '../../constants/constants';

const AppDatePicker = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.inputField}>
        <Text style={styles.titleText}>{USER_DETAILS.MENSTURAL_DATE}</Text>
      </TouchableOpacity>
      <Modal animationType="none" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Calendar
              onDayPress={date => {
                setShowModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AppDatePicker;
