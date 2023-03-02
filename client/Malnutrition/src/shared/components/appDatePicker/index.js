import {View, TouchableOpacity, Text, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {appDatePickerStyles} from './styles';
import {USER_DETAILS} from '../../constants/constants';
import {BLACK, PURPLE} from '../../constants/colors';
import moment from 'moment';

const AppDatePicker = ({
  titleName,
  updatedDate,
  maximumDate,
  arrowRightDisabled,
}) => {
  const [showDate, setShowDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={appDatePickerStyles.inputField}>
        <Text style={appDatePickerStyles.titleText}>
          {showDate == null
            ? titleName
            : moment(showDate.dateString).format('DD MMM YYYY')}
          {/* {USER_DETAILS.MENSTURAL_DATE} */}
        </Text>
      </TouchableOpacity>
      <Modal animationType="none" transparent={true} visible={showModal}>
        <View style={appDatePickerStyles.centeredView}>
          <View style={appDatePickerStyles.modalView}>
            <Calendar
              maxDate={maximumDate ? maximumDate : undefined}
              disableArrowRight={
                arrowRightDisabled ? arrowRightDisabled : false
              }
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
