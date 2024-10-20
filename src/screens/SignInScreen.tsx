import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useCallback, useEffect, useRef, useState } from 'react';
import Button from '../components/Button.tsx';
import { signIn } from '../api/auth.ts';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../navigations/AuthStack.tsx';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
});

type SignInScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'SignIn'
>;

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef<TextInput>(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<SignInScreenNavigationProp>();

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const handleSubmit = useCallback(async () => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        await signIn(email, password);
        navigation.navigate('List');
        setIsLoading(false);
      } catch (error) {
        Alert.alert('로그인 실패', error?.toString(), [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
    }
  }, [disabled, email, isLoading, navigation, password]);

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Image source={require('../assets/main.png')} style={styles.image} />
        <Input
          title={'이메일'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardTypes.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          onChangeText={(text: string) => setEmail(text.trim())}
          value={email}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input
          ref={passwordRef}
          title={'비밀번호'}
          returnKeyType={ReturnKeyTypes.DONE}
          onChangeText={(text: string) => setPassword(text.trim())}
          value={password}
          secureTextEntry
          iconName={IconNames.PASSWORD}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={'로그인'}
            onPress={handleSubmit}
            disabled={disabled}
            isLoading={isLoading}
          />
        </View>
      </View>
    </SafeInputView>
  );
};

export default SignInScreen;
