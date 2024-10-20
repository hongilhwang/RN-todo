import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';

export type AuthStackParamList = {
  SignIn: undefined;
  List: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
      <Stack.Screen name={'List'} component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
