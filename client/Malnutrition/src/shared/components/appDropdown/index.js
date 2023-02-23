import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import GroupIcon from '../../../../assets/svg/icons/groupIcon';
import {
  BLACK,
  LIGHT_GREY,
  PLACEHOLDER_BORDER_COLOR,
  PURPLE,
} from '../../constants/colors';
import {DROPDOWN_BOX, PLACEHOLDER_DETAILS} from '../../constants/constants';

const data = [
  {label: DROPDOWN_BOX.A_RELATIVE, value: '1'},
  {label: DROPDOWN_BOX.AN_NGO_MEMBER, value: '2'},
  {label: DROPDOWN_BOX.AN_ANGANWADI_MEMBER, value: '3'},
];

const AppDropdown = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: LIGHT_GREY}]}>
          {PLACEHOLDER_DETAILS.SELECT_YOUR_ROLE}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        data={data}
        itemTextStyle={styles.itemTextStyle}
        containerStyle={styles.itemContainer}
        maxHeight={300}
        labelField="label"
        valueField="value"
        selectedTextStyle={styles.selectedTextStyle}
        placeholder={!isFocus ? 'Select your role' : 'I am '}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <View style={{paddingRight: 10}}>
            <GroupIcon />
          </View>
        )}
      />
    </View>
  );
};

export default AppDropdown;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: 'center',
    width: '100%',
    borderColor: PLACEHOLDER_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 12,
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    //   borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 50,
    top: 8,
    fontSize: 14,
    fontWeight: '400',
    color: BLACK,
  },
  placeholderStyle: {
    fontSize: 18,
    color: LIGHT_GREY,
    fontWeight: '400',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: BLACK,
  },
  itemTextStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: LIGHT_GREY,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: PLACEHOLDER_BORDER_COLOR,
    borderRadius: 12,
  },
});
