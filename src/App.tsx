import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={'dark'} />
      <Text style={{ fontSize: 30 }}>TODO APP</Text>
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
