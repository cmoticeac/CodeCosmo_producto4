import React, { useEffect } from "react";
import { Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { database, ref, set } from "./firebase";  


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Mensajes = ({ firestoreId }) => {
  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      try {
        console.log("Generando token para firestoreId:", firestoreId);
        
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== "granted") {
          console.error("Permisos denegados para notificaciones.");
          return;
        }        
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log("Token generado:", token);       
        if (firestoreId && token) {
          await set(ref(database, `jugadores/${firestoreId}/expoPushToken`), token);
          console.log("Token guardado en Firebase para:", firestoreId);
        } else {
          console.error("Error: firestoreId o token no son válidos.");
        }        
      } catch (error) {
        console.error("Error al guardar el token:", error);
      }
    };

    registerForPushNotificationsAsync();
  }, [firestoreId]);

  return null;
};

export default Mensajes;
