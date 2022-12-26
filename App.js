import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Layout } from './Layout';
import { Provider } from 'react-redux';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Layout />
        <StatusBar theme="auto" />
      </View>
    </Provider>
  );
}
