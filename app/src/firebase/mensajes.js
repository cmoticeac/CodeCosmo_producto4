import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { database } from "./firebase.js";
import { ref, onValue } from "firebase/database";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

/**
Elemento a exportar para mostrar msg segun rúbrica
*/
const Mensajes = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token =>
      setExpoPushToken(token)
    );

    const notificationListener =
      Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(response => {
        console.log(response);
      });

    const messagesRef = ref(database, "messages");
    onValue(messagesRef, snapshot => {
      const data = snapshot.val();
      console.log("Mensaje desdeBD: ", data);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return null;
};

export default Mensajes;


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
      alert("Failed to get push token for push notification!");
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Expo Push Token:", token);
  } catch (error) {
    console.error("Error de registro for push en notificaciones:", error);
  }

  return token;
}
