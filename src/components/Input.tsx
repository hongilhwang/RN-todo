import { StyleSheet, Text, TextInput, View } from 'react-native';
import { PropsWithChildren, useState } from 'react';
import { BLACK, GRAY, PRIMARY } from '../colors.ts';

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
});

export enum KeyboardTypes {
  DEFAULT = 'default',
  EMAIL = 'email-address',
}

export enum ReturnKeyTypes {
  DONE = 'done',
  NEXT = 'next',
}

type InputProps = PropsWithChildren<{
  title: string;
  placeholder?: string;
  keyboardType?: KeyboardTypes;
  returnKeyType?: ReturnKeyTypes;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value: string;
}>;

const Input = ({
  title,
  placeholder,
  keyboardType = KeyboardTypes.DEFAULT,
  returnKeyType = ReturnKeyTypes.DONE,
  secureTextEntry = false,
  onChangeText,
  value,
}: InputProps) => {
  const [isFocused, setFocused] = useState(false);

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
      <TextInput
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          value && styles.hasValueInput,
        ]}
        placeholder={placeholder ?? title}
        placeholderTextColor={GRAY.DEFAULT}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        textContentType={'none'}
        secureTextEntry={secureTextEntry}
        keyboardAppearance={'light'}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
