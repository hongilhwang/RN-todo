import { Image, StyleSheet, View } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useState } from 'react';

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
});

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        />
        <Input
          title={'비밀번호'}
          returnKeyType={ReturnKeyTypes.DONE}
          onChangeText={(text: string) => setPassword(text.trim())}
          value={password}
          secureTextEntry
        />
      </View>
    </SafeInputView>
  );
};

export default SignInScreen;
