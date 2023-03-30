import React, {useState} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import GroupIcon from '../../../../assets/svg/icons/groupIcon';
import {appDropdownStyles} from './styles';

const AppDropdown = ({dropdownValue, data, placeholder, style}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={appDropdownStyles.container}>
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
        placeholder={!isFocus ? placeholder : ''}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
          dropdownValue(item.value);
        }}
        renderLeftIcon={() => (
          <View style={{paddingRight: 15}}>
            <GroupIcon />
          </View>
        )}
      />
    </View>
  );
};

export default AppDropdown;
