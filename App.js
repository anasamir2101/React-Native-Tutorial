import {
  View,
  StyleSheet,
  StatusBar,
  Button,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Hello from './components/Hello';
import { useState } from 'react';

const App = () => {
  const [isStatusbarVisible, setisStatusbarVisible] = useState(false);

  return (
    <View style={Styles.container}>
      {/* <StatusBar
        backgroundColor={'green'}
        barStyle={'dark-content'}
        hidden={isStatusbarVisible}
      /> */}
      {/* <Button
        title='Visible'
        onPress={() => setisStatusbarVisible(!isStatusbarVisible)}
      /> */}
      {/* <ActivityIndicator
        size={'extra-large'}
        color={'black'}
        animating={false}
      /> */}
      <Button
        title='Click Me'
        onPress={() =>
          Alert.alert('Hello World', 'Welcome To React Native', [
            {
              text: 'Ok',
              onPress: () => console.warn('Ok is Pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.warn('Cancel is Pressed'),
            },
          ])
        }
      />
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
});
export default App;
