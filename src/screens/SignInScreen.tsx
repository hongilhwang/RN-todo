import { StyleSheet, View, Image } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';

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
  return (
    <View style={styles.container}>
      <Image source={require('../assets/main.png')} style={styles.image} />
      <Input
        title={'이메일'}
        placeholder={'your@email.com'}
        keyboardType={KeyboardTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}
      />
      <Input title={'비밀번호'} secureTextEntry />
    </View>
  );
};

export default SignInScreen;
