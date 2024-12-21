import { StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';


export default   Mystyles = StyleSheet.create({
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
  image: {
    width: 200,
    height: 200,
    alignContent: 'center',
    textAlign: 'center',
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 10,
  },

    name: {
      fontSize: 18,
      fontWeight: '600',
    },
/*
    video: {
      width: '100%',
      height: 200,
      marginTop: 10,
    },
    */
     video: {
          width: '100%',    // Ancho del video al 100% del contenedor
          height: 400,      // Ajustamos la altura a 400 para un video grande
          marginTop: 10,    // Espacio superior entre el título y el video
          marginBottom: 20, // Espacio inferior para separar de otros contenidos
        },

 containerVideo: {
    flex: 1,
  },
  baseTextVideo: {
    fontFamily: 'Arial',
    fontSize:24,

  },
  titleTextVideo: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: '#4A628A'
  }
});

