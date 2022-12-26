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
    paddingTop: '7%',
    paddingBottom: '5%',
  },
  title: {
    fontSize: '30px',
  },
});
