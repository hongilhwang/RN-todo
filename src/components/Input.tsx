import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { forwardRef, PropsWithChildren, useMemo, useState } from 'react';
import { BLACK, GRAY, PRIMARY } from '../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export enum IconNames {
  EMAIL = 'email',
  PASSWORD = 'lock',
}

export enum KeyboardTypes {
  DEFAULT = 'default',
  EMAIL = 'email-address',
}

export enum ReturnKeyTypes {
  DONE = 'done',
  NEXT = 'next',
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
    borderColor: GRAY.DEFAULT,
    paddingLeft: 30,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

type InputProps = PropsWithChildren<{
  title: string;
  placeholder?: string;
  keyboardType?: KeyboardTypes;
  returnKeyType?: ReturnKeyTypes;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
  iconName: IconNames;
  value: string;
}>;

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      title,
      placeholder,
      keyboardType = KeyboardTypes.DEFAULT,
      returnKeyType = ReturnKeyTypes.DONE,
      secureTextEntry = false,
      onChangeText,
      onSubmitEditing,
      iconName,
      value,
    },
    ref,
  ) => {
    const [isFocused, setFocused] = useState(false);

    const iconColor = useMemo(() => {
      switch (true) {
        case isFocused && !value:
          return PRIMARY.DEFAULT;
        case !!value:
          return BLACK;
        default:
          return GRAY.DEFAULT;
      }
    }, [isFocused, value]);

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            isFocused && styles.focusedTitle,
            value && styles.hasValueTitle,
          ]}>
          {title}
        </Text>
        <View>
          <TextInput
            ref={ref}
            style={[
              styles.input,
              isFocused && styles.focusedInput,
              value && styles.hasValueInput,
            ]}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize={'none'}
            autoCorrect={false}
            textContentType={'none'}
            secureTextEntry={secureTextEntry}
            keyboardAppearance={'light'}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            value={value}
          />
          <View style={styles.icon}>
            <Icon name={iconName} size={20} color={iconColor} />
          </View>
        </View>
      </View>
    );
  },
);

export default Input;
