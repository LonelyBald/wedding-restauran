import { Modal, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHusbandGuest, addWifeGuest } from '../redux';

export const ModalTable = ({ active, setActive, idTable }) => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [ageInputValue, setAgeInputValue] = useState('');

  const dispatch = useDispatch();
  const saveWifeGuest = () => {
    if (nameInputValue && ageInputValue) {
      dispatch(
        addWifeGuest({
          id: idTable,
          guest: {
            name: nameInputValue,
            age: ageInputValue,
          },
        })
      );
    } else {
      alert('pls fill data');
    }

    setNameInputValue('');
    setAgeInputValue('');
    setActive(!active);
  };

  const saveHusbandGuest = () => {
    if (nameInputValue && ageInputValue) {
      dispatch(
        addHusbandGuest({
          id: idTable,
          guest: {
            name: nameInputValue,
            age: ageInputValue,
          },
        })
      );
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
            <Text style={styles.text}>Choose a side</Text>
            <TouchableOpacity onPress={saveHusbandGuest} style={styles.chooseHusband}>
              <Text style={styles.chooseText}>Husband</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={saveWifeGuest} style={styles.chooseWife}>
              <Text style={styles.chooseText}>Wife</Text>
            </TouchableOpacity>
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
    width: 180,
    height: 50,
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  chooseWife: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#5a2a6b',
    width: 180,
    height: 50,
    alignItems: 'center',
  },
  chooseText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20%',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20%',
  },
  textInput: {
    width: 200,
    borderBottomWidth: 2,
    fontSize: '20%',
    marginBottom: '4%',
  },
});
