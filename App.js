import { View, StyleSheet, StatusBar } from 'react-native';
import Hello from './components/Hello';
import Box from './components/Box';

const App = () => {
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={'green'} barStyle={'light-content'} />
      <Box style={{ backgroundColor: 'green', flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: 'purple', flex: 4 }}>Box 2</Box>
      <Box style={{ backgroundColor: 'red' }}>Box 3</Box>
      <Box style={{ backgroundColor: 'blue' }}>Box 4</Box>
      <Box style={{ backgroundColor: 'yellow' }}>Box 5</Box>
      <Box style={{ backgroundColor: 'maroon' }}>Box 6</Box>
      <Box style={{ backgroundColor: 'plum' }}>Box 7</Box>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: 'red',
  },
});
export default App;
