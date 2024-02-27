import {
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from 'react-native';

const Dimension = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <SafeAreaView style={Styles.safeareaview}>
      <View style={Styles.container}>
        <View
          style={[
            Styles.box,
            {
              width: windowWidth > 500 ? '70%' : '90%',
              height: windowHeight > 600 ? '60%' : '90%',
            },
          ]}
        >
          <Text
            style={[Styles.text, { fontSize: windowWidth > 500 ? 48 : 24 }]}
          >
            Welcome!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  box: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Platform.select({
      ios: {
        color: 'purple',
        fontSize: 24,
      },
      android: {
        color: 'blue',
        fontSize: 30,
      },
    }),
  },
});
export default Dimension;
