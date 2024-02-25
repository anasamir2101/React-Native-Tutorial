import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Img1 from '../assets/my-img.jpg';
const Easypaisa = () => {
  return (
    <View style={Style.container}>
      <View style={Style.box}>
        <View>
          <Image
            source={Img1}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />
          <Text style={{ alignSelf: 'flex-start', fontSize: 16 }}>
            M ANAS AMEER
          </Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontWeight: 'bold',
              fontSize: 20,
            }}
          >
            03167363343
          </Text>
          <Text style={{ alignSelf: 'flex-start', fontSize: 12 }}>
            Sign in to your easypaisa account
          </Text>
        </View>
        <View style={Style.buttoncontainer}>
          <TouchableOpacity style={Style.button}>
            <Text
              style={Style.btn}
              onPress={() =>
                Alert.alert('Welcome to Easypaisa', 'Sign In Successfully', [
                  {
                    text: 'Cancel',
                    onPress: () => console.warn('Cancel is Pressed'),
                  },
                  {
                    text: 'Ok',
                    onPress: () => console.warn('Ok is Pressed'),
                  },
                ])
              }
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#228B22',
  },
  box: {
    elevation: 10,
    marginTop: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 36,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#228B22',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttoncontainer: {
    justifyContent: 'flex-end',
  },
  btn: {
    borderRadius: 20,
    color: 'white',
  },
});
export default Easypaisa;
