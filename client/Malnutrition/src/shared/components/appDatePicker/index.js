import {View, TouchableOpacity, Text, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {styles} from './styles';
import { USER_DETAILS } from '../../constants/constants';
import { BLACK, PURPLE } from '../../constants/colors';

const AppDatePicker = () => {
  const [showDate, setShowDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  console.log(showDate);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.inputField}>
        <Text style={styles.titleText}>
          {showDate == null ? USER_DETAILS.MENSTURAL_DATE : showDate.dateString }
          {/* {USER_DETAILS.MENSTURAL_DATE} */}
          </Text>
      </TouchableOpacity>
      <Modal animationType="none" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Calendar
              onDayPress={date => {
                setShowModal(false);
                setShowDate(date)
              }}
              theme={{
                todayTextColor: PURPLE,
                arrowColor: BLACK
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AppDatePicker;
