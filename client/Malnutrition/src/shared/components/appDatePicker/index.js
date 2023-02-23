import {View, TouchableOpacity, Text, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {styles} from './styles';
import {USER_DETAILS} from '../../constants/constants';
import {BLACK, PURPLE} from '../../constants/colors';

const AppDatePicker = ({titleName, updatedDate, maximumDate}) => {
  const [showDate, setShowDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.inputField}>
        <Text style={styles.titleText}>
          {showDate == null ? titleName : showDate.dateString}
          {/* {USER_DETAILS.MENSTURAL_DATE} */}
        </Text>
      </TouchableOpacity>
      <Modal animationType="none" transparent={true} visible={showModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Calendar
              maxDate={maximumDate ? maximumDate : undefined}
              onDayPress={date => {
                setShowModal(false);
                setShowDate(date);
                updatedDate(date);
              }}
              theme={{
                todayTextColor: PURPLE,
                arrowColor: BLACK,
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AppDatePicker;
