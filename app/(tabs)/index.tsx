import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import Listado from '../src/listado.js';
import styles from './tab_styles/styles';


export default function Index() {


  const handleBack = () => {
      console.log('onBack triggered');
    };

  return (
        <Listado onBack={handleBack} />
  );
}
