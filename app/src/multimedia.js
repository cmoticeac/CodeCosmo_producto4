// Multimedia.js
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const Multimedia = ({ onBack, jugador }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Componente Multimedia</Text>
      {/* Componente Video */}
      <Video
        source={{ uri: jugador.video }} // Accedemos a la URL del video desde la prop jugador
        style={styles.video}
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#B9E5E8',
    },
    title: {
      fontSize: 24,
      color: '#DFF2EB',
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      backgroundColor: '#7AB2D3',
    },
    item: {
      padding: 15,
      borderBottomWidth: 10,
      borderBottomColor: '#B9E5E8',
      backgroundColor: '#DFF2EB',
    },
    name: {
      fontSize: 18,
      fontWeight: '600',
    },
    image: {
      width: 200,    // Ancho de la imagen
      height: 200,   // Alto de la imagen
      alignContent: 'center',
      textAlign: 'center',
      resizeMode: 'cover',  // Ajusta la imagen a un formato adecuado
      marginTop: 10,  // Espacio entre el texto y la imagen
      marginBottom: 10,
    },
    video: {
      width: '100%',    // Ancho del video al 100% del contenedor
      height: 400,      // Ajustamos la altura a 400 para un video grande
      marginTop: 10,    // Espacio superior entre el título y el video
      marginBottom: 20, // Espacio inferior para separar de otros contenidos
    },
});

export default Multimedia;
