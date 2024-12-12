// Detalle.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import Multimedia from './multimedia'; // Importamos el componente Multimedia

const Detalle = ({ jugador, onBack }) => {
  const [showMultimedia, setShowMultimedia] = useState(false); // Estado para controlar si se muestra Multimedia

  // Función para cambiar a la vista Multimedia
  const handleGoToMultimedia = () => {
    setShowMultimedia(true);
  };

  // Si showMultimedia es true, mostramos el componente Multimedia
  if (showMultimedia) {
    return <Multimedia onBack={() => setShowMultimedia(false)} jugador={jugador} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalles del Jugador</Text>
      <Image
        source={{ uri: jugador.img1 }} // Usamos jugador.img1 para acceder a la URL de la imagen
        style={styles.image} // Estilo para la imagen
      />
      <Text>Nombre: {jugador.nombre}</Text>
      <Text>Apellido: {jugador.apellido}</Text>
      <Text>Posición: {jugador.posicion}</Text>
      <Text>Edad: {jugador.edad}</Text>
      <Text>Sexo: {jugador.sexo}</Text>
      <Text>Altura: {jugador.altura}</Text>
      <Text>Partidos: {jugador.partidos}</Text>
      <Text>
        {'\n'}
      </Text>
      <Button title="Volver a la lista" onPress={onBack} />
      <Text>
        {'\n'}
      </Text>
      <Button title="Ir a Multimedia" onPress={handleGoToMultimedia} /> {/* Botón para ir a Multimedia */}
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
    width: '100%',    // Establece el tamaño del video
    height: 200,      // Altura del video
    marginTop: 10,    // Espacio entre la imagen y el video
  },
});

export default Detalle;
