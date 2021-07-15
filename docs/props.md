```javascript
type FormBuilderProps = {
  formConfigArray: Array<
    Omit<LogicProps, 'control'> | Array<Omit<LogicProps, 'control'>>,
  >,
  inputSpacing?: number,
  inputSpacingHorizontal?: number,
  control: any,
  setFocus: (name: any) => void,
  CustomTextInput?: any,
};

type INPUT_TYPES = 'text' | 'email' | 'password' | 'select' | 'custom';

type OPTIONS = Array<{label: string, value: string | number}>;

type LogicProps = {
  name: string,
  rules?: Omit<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>,
  shouldUnregister?: boolean,
  defaultValue?: unknown,
  type: INPUT_TYPES,
  textInputProps?: ComponentProps<typeof Input>,
  selectInputProps?: ComponentProps<typeof Select>,
  label?: string,
  isRequired?: boolean,
  options?: OPTIONS,
  control: any,
  JSX?: typeof Logic,
  inputSpacing?: number,
  inputSpacingHorizontal?: number,
  flex?: number,
  CustomTextInput?: any,
};

type InputSelectProps = {
  field: ControllerRenderProps<FieldValues, string>,
  formState: UseFormStateReturn<FieldValues>,
  selectInputProps?: ComponentProps<typeof Select>,
  label?: string,
  isRequired?: boolean,
  options: OPTIONS,
  CustomTextInput?: any,
};

type InputTextProps = {
  field: ControllerRenderProps<FieldValues, string>,
  formState: UseFormStateReturn<FieldValues>,
  textInputProps?: ComponentProps<typeof Input>,
  label?: string,
  isRequired?: boolean,
  CustomTextInput?: any,
};
```
