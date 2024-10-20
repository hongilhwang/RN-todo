import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { WHITE } from './colors.ts';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style={'dark'} />
        <AuthStack />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;
