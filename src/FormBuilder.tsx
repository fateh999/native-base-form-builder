/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Logic from './Logic/Logic';
import {FormBuilderProps} from './Types/Types';

function FormBuilder(props: FormBuilderProps) {
  const {
    formConfigArray,
    control,
    setFocus,
    inputSpacing = 15,
    inputSpacingHorizontal = 15,
    CustomTextInput,
  } = props;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        rowStyle: {
          flexDirection: 'row',
        },
      }),
    [],
  );

  return (
    <Fragment>
      {formConfigArray.map((item, index) => {
        if (Array.isArray(item)) {
          return (
            <View key={index} style={styles.rowStyle}>
              {item.map((_item, _index) => {
                const INPUT = _item?.CustomTextInput ?? CustomTextInput;
                const next = item[_index + 1]
                  ? item[_index + 1]
                  : formConfigArray[index + 1];
                const nextItem = Array.isArray(next) ? next?.[0] : next;
                const onSubmitEditing =
                  _item.textInputProps?.onSubmitEditing ??
                  (() => {
                    if (nextItem) {
                      if (
                        nextItem.type !== 'custom' &&
                        nextItem.type !== 'select'
                      ) {
                        setFocus(nextItem.name);
                      }
                    }
                  });
                const returnKeyType = next ? 'next' : 'done';
                const horizontalSpacing =
                  _index < item.length - 1
                    ? _item.inputSpacingHorizontal ?? inputSpacingHorizontal
                    : 0;

                return (
                  <View
                    key={`${index} + ${_index}`}
                    style={[
                      {
                        marginRight: horizontalSpacing,
                        flex: _item.flex ?? 1,
                        overflow: 'hidden',
                      },
                    ]}>
                    <Logic
                      {..._item}
                      control={control}
                      textInputProps={{
                        onSubmitEditing,
                        returnKeyType,
                        ..._item.textInputProps,
                      }}
                      CustomTextInput={INPUT}
                    />
                    <View
                      style={{
                        height: _item?.inputSpacing ?? inputSpacing,
                      }}
                    />
                  </View>
                );
              })}
            </View>
          );
        } else {
          const INPUT = item?.CustomTextInput ?? CustomTextInput;
          const next = formConfigArray[index + 1];
          const nextItem = Array.isArray(next) ? next?.[0] : next;
          const onSubmitEditing =
            item.textInputProps?.onSubmitEditing ??
            (() => {
              if (nextItem) {
                if (nextItem.type !== 'custom' && nextItem.type !== 'select') {
                  setFocus(nextItem.name);
                }
              }
            });
          const returnKeyType = next ? 'next' : 'done';

          return (
            <Fragment key={index}>
              <Logic
                {...item}
                control={control}
                textInputProps={{
                  onSubmitEditing,
                  returnKeyType,
                  ...item.textInputProps,
                }}
                CustomTextInput={INPUT}
              />
              <View
                style={{height: item?.inputSpacing ?? inputSpacing ?? 15}}
              />
            </Fragment>
          );
        }
      })}
    </Fragment>
  );
}

export default FormBuilder;
