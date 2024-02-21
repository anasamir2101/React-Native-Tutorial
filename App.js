import { View, StyleSheet } from 'react-native';
import Hello from './components/Hello';

const App = () => {
  return (
    <View style={Styles.container}>
      <Hello />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
});
export default App;
