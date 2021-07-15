import {FormControl, ScrollView, Select} from 'native-base';
import React from 'react';
import {InputSelectProps} from '../Types/Types';

function InputText(props: InputSelectProps) {
  const {formState, field, selectInputProps, label, isRequired, options} =
    props;
  const errorMessage = formState.errors?.[field.name]?.message;

  return (
    <FormControl isRequired={isRequired} isInvalid={errorMessage}>
      {label && (
        <ScrollView horizontal>
          <FormControl.Label _text={{numberOfLines: 1}}>
            {label}
          </FormControl.Label>
        </ScrollView>
      )}
      <Select
        variant={'filled'}
        selectedValue={field.value}
        onValueChange={itemValue => field.onChange(itemValue)}
        _selectedItem={{
          bg: 'primary.500',
        }}
        {...selectInputProps}>
        {options.map(({label: _label, value}) => {
          return <Select.Item key={value} label={_label} value={`${value}`} />;
        })}
      </Select>
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
