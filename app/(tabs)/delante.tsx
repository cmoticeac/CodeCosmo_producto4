import { Text,Button, View, StyleSheet } from 'react-native';
import Listado from '../src/listado.js';
import { useNavigation } from '@react-navigation/native';
import styles from './tab_styles/styles';

export default function Delante_Screen() {
  const navigation = useNavigation();

  return (
           <Listado />
  );
}
