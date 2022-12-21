import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Table } from './Table';

export const Home = () => {
  const [tableList, setTableList] = useState([]);
  const [numTable, setNumTable] = useState(1);

  const addTableHandler = () => {
    const tableListCopy = [...tableList];
    tableListCopy.push(<Table num={numTable} />);
    setTableList(tableListCopy);
    setNumTable(numTable + 1);
  };

  return (
    <View style={styles.home}>
      <TouchableOpacity style={styles.touch} onPress={addTableHandler}>
        <Text style={styles.add}>Add new table</Text>
      </TouchableOpacity>
      {tableList.map((table) => {
        return <View>{table}</View>;
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
