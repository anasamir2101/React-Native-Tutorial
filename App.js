import { View, StyleSheet, StatusBar } from 'react-native';
// import Hello from './components/Hello';
// import Easypaisa from './components/Easypaisa';
// import Dimensions from './components/Dimensions';

import Dimensions from './components/Dimension';

const App = () => {
  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Dimensions />
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
