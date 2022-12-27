import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Table } from './Table';
import { useDispatch, useSelector } from 'react-redux';
import { addTable } from '../redux';

export const Home = () => {
  const tables = useSelector((state) => state.counter.tables);
  const dispatch = useDispatch();

  const addTableHandler = () => {
    dispatch(addTable());
  };

  return (
    <View style={styles.home}>
      <TouchableOpacity style={styles.touch} onPress={addTableHandler}>
        <Text style={styles.add}>Add new table</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <ScrollView>
          {tables.map((table, index) =>
            table.id === 0 ? null : <Table key={index} numTable={table.id} />
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '90%',
    borderRadius: 8,
    // border: '1 solid #000000',
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
  },
  touch: {
    margin: '2%',
    width: '70%',
    height: '8%',
    borderRadius: 8,
    backgroundColor: 'darkcyan',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: 'white',
    fontSize: '20%',
  },
  content: {
    width: '100%',
    height: '90%',
  },
});
