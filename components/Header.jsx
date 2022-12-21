import { View, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Wedding Guests</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7% 0 5% 0',
    borderBottom: '1px solid black',
  },
  title: {
    fontSize: '30px',
  },
});
