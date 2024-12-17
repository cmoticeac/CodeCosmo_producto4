import { Tabs } from 'expo-router';
import {  Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Atras_Screen from './atras';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';


export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                  backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                backgroundColor: '#25292e',
                },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="atras"
        options={{
          title: 'Atrás', tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'arrow-back' : 'arrow-back-outline'} color={color} size={24} />
          ),
        }}
      />

    </Tabs>

  );
}
