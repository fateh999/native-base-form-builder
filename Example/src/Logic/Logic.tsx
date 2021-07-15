import React, {Fragment} from 'react';
import {useController} from 'react-hook-form';
import InputSelect from '../Inputs/InputSelect';
import InputText from '../Inputs/InputText';
import {LogicProps} from '../Types/Types';

function Logic(props: LogicProps): any {
  const {
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
    type,
    textInputProps,
    selectInputProps,
    label,
    isRequired = rules?.required ? true : false,
    JSX,
    options,
    CustomTextInput,
    onDismiss,
  } = props;
  const {field, formState} = useController({
    name,
    rules,
    shouldUnregister,
    defaultValue,
    control,
  });

  switch (type) {
    case 'text': {
      return (
        <InputText
          field={field}
          formState={formState}
          textInputProps={textInputProps}
          CustomTextInput={CustomTextInput}
          label={label}
          isRequired={isRequired}
        />
      );
    }
    case 'email': {
      return (
        <InputText
          field={field}
          formState={formState}
          textInputProps={{
            ...textInputProps,
            keyboardType: 'email-address',
            autoCapitalize: 'none',
          }}
          CustomTextInput={CustomTextInput}
          label={label}
          isRequired={isRequired}
        />
      );
    }
    case 'password': {
      return (
        <InputText
          field={field}
          formState={formState}
          textInputProps={{
            ...textInputProps,
            secureTextEntry: true,
          }}
          CustomTextInput={CustomTextInput}
          label={label}
          isRequired={isRequired}
        />
      );
    }
    case 'select': {
      return (
        <Fragment>
          {options && (
            <InputSelect
              field={field}
              formState={formState}
              selectInputProps={{
                ...selectInputProps,
              }}
              options={options}
              CustomTextInput={CustomTextInput}
              onDismiss={onDismiss}
              label={label}
              isRequired={isRequired}
            />
          )}
        </Fragment>
      );
    }
    case 'custom': {
      return JSX && JSX(props);
    }
    default: {
      return <Fragment />;
    }
  }
}

export default Logic;
