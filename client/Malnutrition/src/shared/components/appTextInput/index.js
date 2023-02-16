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
}) => {
  const {textInput, errorStyle} = InputFieldStyles;
  return (
    <View>
      <View>
        <TextInput
          ref={rel}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          autoCorrect={false}
          value={value}
          onChangeText={changeText}
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
          onFocus={onFocus}
          placeholderTextColor={placeholderTextColor}
          numberOfLines={numberOfLines}
          onBlur={onBlur}
        />
      </View>
    </View>
  );
};

export default AppTextInput;
