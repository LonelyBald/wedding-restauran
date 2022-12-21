import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Layout } from './Layout';

export default function App() {
  return (
    <View>
      <Layout />
      <StatusBar theme="auto" />
    </View>
  );
}
