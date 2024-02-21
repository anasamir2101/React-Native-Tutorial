import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';
const Hello = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const HandleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
        Simple Hello World
      </Text>
      <Button title='Click' color={'blue'} onPress={() => HandleModal()} />
      <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modal}>
          <Text style={{ color: 'white', fontSize: 30 }}>
            Hello React Native
          </Text>
          <Button title='Close' color={'blue'} onPress={() => HandleModal()} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'plum',
    justifyContent: 'center',
    padding: 60,
  },
  modal: {
    flex: 1,
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
});
export default Hello;
