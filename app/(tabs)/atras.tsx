import { Text,Button, View, StyleSheet } from 'react-native';
import Listado from '../src/listado.js';

import { useNavigation } from '@react-navigation/native';


export default function Atras_Screen() {
  const navigation = useNavigation(); // Hook para acceder a la navegación;

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
