import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
} from 'react-native';
import PokemonCard from './Pokemon_Card_components/components/PokemonCard';

const App = () => {
  return (
    <View style={Styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={'grey'} barStyle={'dark-content'} />
        <PokemonCard />
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
});
export default App;
