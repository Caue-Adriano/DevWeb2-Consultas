import './gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/pages/homepage';

import Routes from './src/routes/index.routes';
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}

export const Backend = "http://172.20.10.5:4000"

const styles = StyleSheet.create({
  
});
