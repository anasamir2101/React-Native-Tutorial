import { View, StyleSheet, Text } from 'react-native';

const Dimensions = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.box}>
        <Text style={Styles.text}>Welcome!</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Dimensions;
