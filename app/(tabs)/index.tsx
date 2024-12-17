import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
 import { Link } from 'expo-router';
 import Listado from '../src/listado.js';

export default function Index() {

  return (

    <View style={styles.container}>
         <Listado />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
