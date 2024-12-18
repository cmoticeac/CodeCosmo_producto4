import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import Mystyles from './mystyles';

const Multimedia = ({ onBack, jugador }) => {
  return (
    <ScrollView style={Mystyles.container}>
      <Text style={Mystyles.title}>Componente Multimedia</Text>
      {/* Componente Video */}
      <Video
        source={{ uri: jugador.video }} // Accedemos a la URL del video desde la prop jugador
        style={Mystyles.video}
        shouldPlay={false}  // El video se inicia en pausa
        useNativeControls={true}  // Habilitamos los controles nativos del video
        resizeMode="cover"  // Ajuste del video para que no se deforme
      />
      <Text>
        {'\n'}
      </Text>
      <Button
        title="Volver a los detalles"
        onPress={onBack} // Llamamos la función onBack para regresar al componente Detalle
      />
    </ScrollView>
  );
};


export default Multimedia;
