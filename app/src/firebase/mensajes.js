import React, { useEffect } from "react";
import { Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { database, ref, set } from "./firebase"; // Ajusta la ruta según la ubicación de firebase.js

// Configurar cómo manejar las notificaciones
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Mensajes = ({ userId }) => {
  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      let token;

      // Configurar el canal de notificaciones para Android
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      // Solicitar permisos de notificaciones
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        Alert.alert("Permisos denegados", "No se puede obtener el token.");
        return;
      }

      // Obtener el token de Expo
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("Token generado:", token);
      
      // Guardar el token en Firebase
      if (userId && token) {
        console.log(`Intentando guardar token para userId: ${userId}`);
        await set(ref(database, `jugadores/${userId}/expoPushToken`), token);
        console.log("Token guardado en Firebase.");
      } else {
        console.error("Error: userId o token no son válidos.");
      
    };

    registerForPushNotificationsAsync();
  }, [userId]);

  return null; // Este componente no tiene UI
};

export default Mensajes;
