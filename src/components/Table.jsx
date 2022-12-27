import { ModalTable } from './ModalTable';
import { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGuests } from '../redux';

export const Table = ({ numTable }) => {
  const [modalTableActive, setModalTableActive] = useState(false);
  const tables = useSelector((state) => state.counter.tables);
  const currentTable = tables.find(({ id }) => id === numTable);
  const dispatch = useDispatch();
  const openModal = () => {
    setModalTableActive(true);
  };

  const DELETE_GUESTS_MESSAGE = 'Do you want to remove all guests?';
  const clearGuests = () => {
    Alert.alert('Delete guests', DELETE_GUESTS_MESSAGE, [
      {
        text: 'Yes',
        onPress: () => {
          dispatch(deleteGuests({ id: numTable }));
        },
      },
      {
        text: 'No',
        onPress: () => {
          return null;
        },
      },
    ]);
    {
    }
  };

  return (
    <View style={styles.table}>
      <View style={styles.tableContainer}>
        <Text style={styles.titleTable}>Table №{numTable}</Text>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={styles.textButton}>Add new guest</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.deleteGuests} onPress={clearGuests}>
        <Text style={styles.textButton}>Delete Guests</Text>
      </TouchableOpacity>
      {currentTable.wifeGuests.map(({ name, age }) => {
        return name && age ? (
          <View style={styles.guestWifeContainer} key={name + age}>
            <Text style={styles.guestText}>{name}, </Text>
            <Text style={styles.guestText}>{age}</Text>
          </View>
        ) : null;
      })}
      {currentTable.husbandGuests.map(({ name, age }) => {
        return (
          <View style={styles.guestHusbandContainer}>
            <Text style={styles.guestText}>{name}, </Text>
            <Text style={styles.guestText}>{age}</Text>
          </View>
        );
      })}
      <ModalTable active={modalTableActive} setActive={setModalTableActive} idTable={numTable} />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    width: '90%',
    minHeight: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    margin: '2%',
    display: 'flex',
  },
  tableContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleTable: {
    padding: '2%',
    fontWeight: '700',
    fontSize: '20%',
  },
  addButton: {
    position: 'fixed',
    width: ' 60%',
    height: 30,
    backgroundColor: 'darkcyan',
    margin: '2%',
    borderRadius: 8,
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: '20%',
    padding: '2%',
    fontWeight: 'bold',
  },
  guestWifeContainer: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '10%',
    padding: 4,
    margin: 2,
    borderStyle: 'solid',
    borderWidth: '6px',
    borderRadius: '2px',
    borderColor: '#5a2a6b',
  },
  guestHusbandContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
    margin: 2,
    borderStyle: 'solid',
    borderWidth: '6px',
    borderRadius: '2px',
    borderColor: '#315d28',
  },
  guestText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deleteGuests: {
    position: 'fixed',
    width: ' 60%',
    height: 30,
    marginLeft: 122,
    backgroundColor: '#711515',
    margin: '2%',
    borderRadius: 8,
    alignItems: 'center',
  },
});
