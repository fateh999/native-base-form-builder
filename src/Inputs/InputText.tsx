import {FormControl, Input, ScrollView} from 'native-base';
import React from 'react';
import {InputTextProps} from '../Types/Types';

function InputText(props: InputTextProps) {
  const {formState, field, textInputProps, CustomTextInput, label, isRequired} =
    props;
  const errorMessage = formState.errors?.[field.name]?.message;
  const INPUT = CustomTextInput ?? Input;

  return (
    <FormControl isRequired={isRequired} isInvalid={errorMessage}>
      {label && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <FormControl.Label
            _text={{
              numberOfLines: 1,
              overflow: 'hidden',
              ellipsizeMode: 'clip',
            }}>
            {label}
          </FormControl.Label>
        </ScrollView>
      )}
      <INPUT
        variant={'filled'}
        error={errorMessage ? true : false}
        {...textInputProps}
        ref={field.ref}
        value={field.value}
        onChangeText={(text: string) => field.onChange(text)}
      />
      {errorMessage && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </ScrollView>
      )}
    </FormControl>
  );
}

export default InputText;
