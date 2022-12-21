import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const ModalTable = ({ active, setActive }) => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [ageInputValue, setAgeInputValue] = useState('');
  const [storage] = useState([]);
  const parseStorage = JSON.stringify(storage);

  const saveValue = async () => {
    if (nameInputValue && ageInputValue) {
      await AsyncStorage.setItem(parseStorage, nameInputValue);
      await AsyncStorage.setItem(parseStorage, ageInputValue);
      // AsyncStorage.setItem('key', JSON.stringify(chooseValue));
      const items = AsyncStorage.getItem(JSON.parse(parseStorage));
      alert(items);
    } else {
      alert('pls fill data');
    }

    setNameInputValue('');
    setAgeInputValue('');
    setActive(!active);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={active}
        onRequestClose={() => {
          setActive(!active);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>Guest</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Add name..."
              value={nameInputValue}
              onChangeText={(data) => setNameInputValue(data)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter age..."
              value={ageInputValue}
              onChangeText={(data) => setAgeInputValue(data)}
            />
            <Text style={styles.chooseText}>Choose a side</Text>
            <TouchableOpacity style={styles.chooseHusband}>
              <Text style={styles.chooseText}>Husband</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chooseWife}>
              <Text style={styles.chooseText}>Wife</Text>
            </TouchableOpacity>
            <Pressable onPress={saveValue} style={styles.press}>
              <Text style={styles.text}>Add Guest</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalView: {
    minHeight: '30%',
    minWidth: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: '5%',
    alignItems: 'center',
  },
  titleText: {
    fontSize: '30%',
    marginBottom: '5%',
  },
  chooseHusband: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#315d28',
    width: '180px',
    height: '50px',
    alignItems: 'center',
    margin: '5% 0',
  },
  chooseWife: {
    display: 'flex',
    justifyContent: ' center',
    borderRadius: 20,
    backgroundColor: '#5a2a6b',
    width: '180px',
    height: '50px',
    alignItems: 'center',
  },
  press: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
    width: '200px',
    height: '50px',
    marginTop: '15%',
    alignItems: 'center',
  },
  chooseText: {
    color: ' black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20%',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20%',
  },
  textInput: {
    width: ' 200px',
    borderBottomWidth: '2px',
    fontSize: '20%',
    marginBottom: '4%',
  },
});
