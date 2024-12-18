import React, { useState } from 'react';


import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Multimedia from './multimedia'; // Importamos el componente Multimedia
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Mystyles from './mystyles';

const Detalle = ({ jugador, onBack }) => {
  const [showMultimedia, setShowMultimedia] = useState(false); // Estado para controlar si se muestra Multimedia


  const handleGoToMultimedia = () => {
    setShowMultimedia(true);
  };

  // Si showMultimedia es true, mostramos el componente Multimedia
  if (showMultimedia) {
    return <Multimedia onBack={() => setShowMultimedia(false)} jugador={jugador} />;
  }

  return (
    <ScrollView style={Mystyles.container}>
       <SafeAreaProvider>
          <SafeAreaView style={Mystyles.container}>
          <View>
              <Text style={Mystyles.title}>Detalles del Jugador</Text>
              <Image source={{ uri: jugador.img1 }}  /> // Usamos jugador.img1 para acceder a la URL de la imagen

              <Text style={Mystyles.name}>Nombre: {jugador.nombre}</Text>
              <Text style={Mystyles.name}>Apellido: {jugador.apellido}</Text>
              <Text style={Mystyles.name}>Posición: {jugador.posicion}</Text>
              <Text style={Mystyles.name}>Edad: {jugador.edad}</Text>
              <Text style={Mystyles.name}>Sexo:  {jugador.sexo}</Text>
              <Text style={Mystyles.name}>Altura: {jugador.altura}</Text>
              <Text style={Mystyles.name}>Partidos: {jugador.partidos}</Text>

              <Button title='Volver a la lista' onPress={onBack} />
    </View>
          </SafeAreaView>
       </SafeAreaProvider>
      <Button title="Ir a Multimedia" onPress={handleGoToMultimedia} /> {/* Botón para ir a Multimedia */}
    </ScrollView>
  );
};

export default Detalle;
