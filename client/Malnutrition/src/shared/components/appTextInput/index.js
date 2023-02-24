import React from 'react';
import {View, TextInput} from 'react-native';
import {InputFieldStyles} from './styles';

const AppTextInput = ({
  value,
  autoCapitalize,
  changeText,
  placeholder,
  secureTextEntry,
  error,
  errorStyles,
  onSubmitEditing,
  rel,
  returnKeyType,
  keyboardType,
  newStyles,
  autoFocus,
  multiline,
  maxLength,
  onFocus,
  underlineColorAndroid,
  placeholderTextColor,
  numberOfLines,
  onBlur,
  name,
}) => {
  const {textInput, errorStyle} = InputFieldStyles;
  return (
    <View>
      <View>
        <TextInput
          onChangeText={changeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          ref={rel}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          underlineColorAndroid={underlineColorAndroid}
          blurOnSubmit={true}
          autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
          style={
            error
              ? errorStyles
                ? errorStyles
                : errorStyle
              : newStyles
              ? newStyles
              : textInput
          }
          autoFocus={autoFocus}
          multiline={multiline}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          numberOfLines={numberOfLines}
        />
      </View>
    </View>
  );
};

export default AppTextInput;
