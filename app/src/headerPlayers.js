import React, {useState} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Listado from './listado';
const HeaderPlayer = () => {
  const titleText='Grupo CodeCosmos';
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View> 
           <Text style={styles.titleText}> {titleText} </Text>
        </View>
        <Listado />

        

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Arial',
    fontSize:24,
    
  },
  titleText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#4A628A'
  }
});

export default HeaderPlayer;