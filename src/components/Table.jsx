import { ModalTable } from './ModalTable';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHusbandGuest } from '../redux';

export const Table = ({ numTable }) => {
  const [modalTableActive, setModalTableActive] = useState(false);
  const tables = useSelector((state) => state.counter.tables);
  const dispatch = useDispatch();

  const deleteHusGuest = () => {
    dispatch(deleteHusbandGuest({ id: numTable, name: name }));
  };

  const openModal = () => {
    setModalTableActive(true);
  };

  return (
    <View style={styles.table}>
      <View style={styles.tableContainer}>
        <Text style={styles.titleTable}>Table №{numTable}</Text>
        <TouchableOpacity style={styles.addButton} onPress={openModal}>
          <Text style={styles.textButton}>Add new guest</Text>
        </TouchableOpacity>
      </View>
      {tables.map((table) =>
        table.wifeGuests
          ? table.wifeGuests.map(({ name, age }) => {
              return (
                <View style={styles.guestWife}>
                  <Text>{name}, </Text>
                  <Text>{age}</Text>
                </View>
              );
            })
          : null
      )}
      {tables.map((table) =>
        table.husbandGuests
          ? table.husbandGuests.map(({ name, age }) => {
              return (
                <View style={styles.guestHusband}>
                  <Text>{name}, </Text>
                  <Text>{age}</Text>
                  <TouchableOpacity onPress={deleteHusGuest}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              );
            })
          : null
      )}
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
  },
  guestWife: {
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
  guestHusband: {
    display: 'flex',
    flexDirection: 'row',
    padding: 4,
    margin: 2,
    borderStyle: 'solid',
    borderWidth: '6px',
    borderRadius: '2px',
    borderColor: '#315d28',
  },
});
