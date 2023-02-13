import {useState} from 'react';
import Dropdown from 'react-native-input-select';
// import {styles} from '../../../modules/onboarding/styles';
import {styles} from './styles';

const SelectDropdown = dropdownOptions => {
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <Dropdown
      style={styles.inputField}
      placeholder="Select an option..."
      options={[{name: 'An NGO Member', code: 'ngo'}]}
      optionLabel={'name'}
      optionValue={'code'}
      selectedValue={selectedOption}
      onValueChange={value => setSelectedOption(value)}
      primaryColor={'green'}
    />
  );
};
export default SelectDropdown;
