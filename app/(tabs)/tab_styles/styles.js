import { StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },

     headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
      },
      titleContainer: {
        flexDirection: 'row',
        gap: 8,
      },
  });


export default styles;