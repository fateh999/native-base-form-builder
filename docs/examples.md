# Basic Example

```jsx
import React from 'react';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {FormBuilder} from 'native-base-form-builder';
import {Button, VStack, ScrollView, Heading, Box} from 'native-base';

function BasicExample() {
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <VStack safeArea flex={1}>
      <Box p={3}>
        <Heading size={'lg'} textAlign={'center'}>
          Form Builder Basic Demo
        </Heading>
      </Box>

      <ScrollView m={5}>
        <FormBuilder
          control={control}
          setFocus={setFocus}
          formConfigArray={[
            [
              {
                type: 'text',
                name: 'name',
                rules: {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                },
                textInputProps: {
                  variant: 'filled',
                },
                flex: 2,
                label: 'Name',
              },
              {
                type: 'text',
                name: 'age',
                rules: {
                  required: {
                    value: true,
                    message: 'Age is required',
                  },
                },
                textInputProps: {
                  keyboardType: 'numeric',
                },
                flex: 1,
                label: "User's Age",
              },
            ],
            {
              type: 'email',
              name: 'email',
              rules: {
                required: {
                  value: true,
                  message: 'Email is required',
                },
              },
              label: 'Email',
            },
            {
              type: 'password',
              name: 'password',
              rules: {
                required: {
                  value: true,
                  message: 'Password is required',
                },
              },
              label: 'Password',
              textInputProps: {},
            },
            {
              name: 'gender',
              type: 'select',
              label: 'Gender',
              rules: {
                required: {
                  value: true,
                  message: 'Gender is required',
                },
              },
              options: [
                {
                  value: 0,
                  label: 'Female',
                },
                {
                  value: 1,
                  label: 'Male',
                },
                {
                  value: 2,
                  label: 'Others',
                },
              ],
            },
          ]}
        />
        <Button
          onPress={handleSubmit((data: any) => {
            Alert.alert('Form Data', JSON.stringify(data));
          })}>
          Submit
        </Button>
      </ScrollView>
    </VStack>
  );
}

export default BasicExample;
```
