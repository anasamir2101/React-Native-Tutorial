import { View, StyleSheet, Text, StatusBar } from 'react-native';

const Box = ({ children, style }) => {
  return (
    <View style={[Styles.container, style]}>
      <Text style={[Styles.text]}>{children}</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default Box;
