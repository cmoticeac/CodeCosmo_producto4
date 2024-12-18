import { Text,Button, View, StyleSheet } from 'react-native';
import Listado from '../src/listado.js';
import { useNavigation } from '@react-navigation/native';
import styles from './tab_styles/styles';

export default function Atras_Screen() {
  const navigation = useNavigation(); // Hook para acceder a la navegación;

  return (
            <Listado />
  );
}
