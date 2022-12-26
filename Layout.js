import { Header } from './src/components/Header';
import { Home } from './src/components/Home';
import { View, StyleSheet } from 'react-native';

export const Layout = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: '4%',
  },
});
