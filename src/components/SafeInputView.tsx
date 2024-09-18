import { PropsWithChildren, ReactNode } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';

type SafeInputViewProps = PropsWithChildren<{
  children: ReactNode;
}>;

const SafeInputView = ({ children }: SafeInputViewProps) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding' })}>
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default SafeInputView;
