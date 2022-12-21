import { ModalTable } from './ModalTable';
import { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const Table = ({ num }) => {
  const [modalTableActive, setModalTableActive] = useState(false);

  const openModal = () => {
    setModalTableActive(true);
  };
  return (
    <View style={styles.table}>
      <Text style={styles.titleTable}>Table №{num}</Text>
      <TouchableOpacity style={styles.addButton} onPress={openModal}>
        <Text style={styles.textButton}>Add new guest</Text>
      </TouchableOpacity>

      <ModalTable active={modalTableActive} setActive={setModalTableActive} />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    minWidth: '80%',
    minHeight: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    margin: '2%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleTable: {
    padding: '2%',
    fontWeight: '700',
    fontSize: '20%',
  },
  addButton: {
    width: ' 60%',
    height: '50%',
    backgroundColor: 'darkcyan',
    margin: '2%',
    borderRadius: 8,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: '20%',
    padding: '2%',
  },
});
