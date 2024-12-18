import React, {useState} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Listado from './listado';
import Mystyles from './mystyles';

const HeaderPlayer = () => {
  const titleText='Grupo CodeCosmos';
  

  return (
    <SafeAreaProvider>
      <SafeAreaView style={stylesVideo}>
        <View> 
           <Text style={Mystyles.titleText}> {titleText} </Text>
        </View>
        <Listado />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HeaderPlayer;