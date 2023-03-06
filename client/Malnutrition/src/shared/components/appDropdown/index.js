import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import GroupIcon from '../../../../assets/svg/icons/groupIcon';
import {LIGHT_GREY} from '../../constants/colors';
import {DROPDOWN_BOX, PLACEHOLDER_DETAILS} from '../../constants/constants';
import {appDropdownStyles} from './styles';

const data = [
  {label: DROPDOWN_BOX.A_RELATIVE, value: 'RELATIVE'},
  {label: DROPDOWN_BOX.AN_NGO_MEMBER, value: 'NGO_MEMBER'},
  {label: DROPDOWN_BOX.AN_ANGANWADI_MEMBER, value: 'ANGANWADI_MEMBER'},
];

const AppDropdown = ({dropdownValue}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[appDropdownStyles.label, isFocus && {color: LIGHT_GREY}]}>
          {PLACEHOLDER_DETAILS.SELECT_YOUR_ROLE}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={appDropdownStyles.container}>
      {renderLabel()}
      <Dropdown
        style={[appDropdownStyles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={appDropdownStyles.placeholderStyle}
        data={data}
        itemTextStyle={appDropdownStyles.itemTextStyle}
        containerStyle={appDropdownStyles.itemContainer}
        maxHeight={300}
        labelField="label"
        valueField="value"
        selectedTextStyle={appDropdownStyles.selectedTextStyle}
        placeholder={!isFocus ? 'Select your role' : 'I am '}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          dropdownValue(item.value);
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
