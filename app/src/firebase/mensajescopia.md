import React, { useEffect, useState } from "react";
import { Platform, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import { database } from "./firebase.js";
import { ref, onValue } from "firebase/database";
import axios from "axios"; // Para enviar notificaciones al servicio de Expo

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

/**
 * Componente para manejar mensajes y notificaciones
 */
const Mensajes = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    // Registrar el dispositivo para recibir notificaciones
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // Escuchar notificaciones entrantes
    const notificationListener =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Respuesta al tocar la notificación:", response);
      });

    // Escuchar cambios en la base de datos de Firebase

   /* const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Datos desde Firebase:", data);

      // Lógica para enviar una notificación
      if (data) {
        enviarNotificacion("Nuevo mensaje", JSON.stringify(data));
      }
    });*/

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);



  // Función para enviar una notificación
  const enviarNotificacion = async (title, body) => {
    if (!expoPushToken) {
      console.warn("No se ha registrado un token de notificaciones.");
      return;
    }

    try {
      await axios.post("https://exp.host/--/api/v2/push/send", {
        to: expoPushToken,
        sound: "default",
        title: title,
        body: body,
      });
      console.log("Notificación enviada");
    } catch (error) {
      console.error("Error enviando la notificación:", error);
    }
  };

  return null;
};

export default Mensajes;

// Registrar dispositivo para recibir notificaciones push
async function registerForPushNotificationsAsync() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  let token;
  try {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      Alert.alert("Error", "No se pudo obtener el permiso de notificaciones");
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo Push Token registrado:", token);
  } catch (error) {
    console.error("Error al registrar notificaciones:", error);
  }

  return token;
}
