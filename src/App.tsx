import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={'dark'} />
      <SignInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;
