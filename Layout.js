import { Header } from './components/Header';
import { Home } from './components/Home';
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
