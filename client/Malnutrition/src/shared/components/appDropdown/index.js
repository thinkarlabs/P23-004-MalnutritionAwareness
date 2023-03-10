import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import GroupIcon from '../../../../assets/svg/icons/groupIcon';
import {LIGHT_GREY} from '../../constants/colors';
import {appDropdownStyles} from './styles';

const AppDropdown = ({dropdownValue, data, placeholder, style}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[appDropdownStyles.label, isFocus && {color: LIGHT_GREY}]}>
          {placeholder}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={appDropdownStyles.container}>
      {renderLabel()}
      <Dropdown
        style={[style, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={appDropdownStyles.placeholderStyle}
        data={data}
        itemTextStyle={appDropdownStyles.itemTextStyle}
        containerStyle={appDropdownStyles.itemContainer}
        maxHeight={300}
        labelField="label"
        valueField="value"
        selectedTextStyle={appDropdownStyles.selectedTextStyle}
        placeholder={!isFocus ? placeholder : 'I am '}
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
