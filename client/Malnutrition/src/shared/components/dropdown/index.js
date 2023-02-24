import {useState} from 'react';
import Dropdown from 'react-native-input-select';
// import {styles} from '../../../modules/onboarding/styles';
import {styles} from './styles';

const SelectDropdown = ({dropdownOptions, dropdownValue}) => {
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <Dropdown
      style={styles.inputField}
      placeholder="Select your role"
      options={[
        {name: 'A Relative', code: 'rel'},
        {name: 'An NGO Member', code: 'ngo'},
        {name: 'An Anganwadi Member', code: 'angw'},
      ]}
      optionLabel={'name'}
      optionValue={'code'}
      selectedValue={selectedOption}
      onValueChange={value => {
        setSelectedOption(value);
        dropdownValue(value);
      }}
      primaryColor={'green'}
    />
  );
};
export default SelectDropdown;
