import { StyleSheet, Text, TextInput, View } from 'react-native';
import { PropsWithChildren } from 'react';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 42,
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
}>;

const Input = ({
  title,
  placeholder,
  keyboardType = KeyboardTypes.DEFAULT,
  returnKeyType = ReturnKeyTypes.DONE,
  secureTextEntry = false,
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder ?? title}
        placeholderTextColor={'#a3a3a3'}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        textContentType={'none'}
        secureTextEntry={secureTextEntry}
        keyboardAppearance={'light'}
      />
    </View>
  );
};

export default Input;
