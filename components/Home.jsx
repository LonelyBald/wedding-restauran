import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Table } from './Table';
import { ModalTable } from './ModalTable';

export const Home = () => {
  const [tableList, setTableList] = useState([]);
  const [numTable, setNumTable] = useState(0);
  const [table, setTable] = useState({ num: 0, guest: [] });

  const addTableHandler = () => {
    const tableListCopy = [...tableList];
    table.num = numTable;
    setNumTable((prev) => prev + 1);
    tableListCopy.push(table);
    setTableList(tableListCopy);
    console.log(tableList);
  };

  return (
    <View style={styles.home}>
      <TouchableOpacity style={styles.touch} onPress={addTableHandler}>
        <Text style={styles.add}>Add new table</Text>
      </TouchableOpacity>
      {tableList.map((table) => {
        return <Table table={table} num={numTable} />;
      })}
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
});
