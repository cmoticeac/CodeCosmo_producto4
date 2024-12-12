import {  StyleSheet } from 'react-native';
 
import HeaderPlayer from '../src/headerPlayers.js';
import Listado from '../src/listado.js';

export default function HomeScreen() {
  return (     
       <HeaderPlayer /> 
       
  );
   
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});
