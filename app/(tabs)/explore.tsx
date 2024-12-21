import React from 'react';
import { StyleSheet, Image, Text, View, Linking } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const TabTwoScreen: React.FC = () => {
  const handlePress = () => {
    Linking.openURL('https://sites.google.com/uoc.edu/codecosmos');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={{ uri: 'https://alejandroarevalorojas.com/assets/CodeCosmos.png' }}
          style={localStyles.image}
          resizeMode="contain"
        />
      }>
      <View style={localStyles.titleContainer}>
        <Text style={localStyles.title}>Grupo CodeCosmos</Text>
      </View>

      <Text style={localStyles.description}>
        Los miembros del grupo somos:
      </Text>
      <Text style={localStyles.paragraph}>
        Sue Cajidos{'\n'}
        Carlos Bravo{'\n'}
        Camelia Ancuta Moticeac{'\n'}
        Alejandro Arévalo{'\n'}
        Liliana Díaz
      </Text>

      <Text style={localStyles.description}>
        En este link se pueden ver más detalles de nuestro trabajo:
      </Text>

      {/* Enlace funcional */}
      <Text style={localStyles.link} onPress={handlePress}>
        Link a Google Sites
      </Text>
    </ParallaxScrollView>
  );
};

export default TabTwoScreen;

const localStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  titleContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginVertical: 10,
  },
});
