import * as Notifications from "expo-notifications";
import { database, ref, set } from "./firebase";

const guardarToken = async (firestoreId) => {
  try {
    console.log("Generando token para firestoreId:", firestoreId);

    // Obtener permisos de notificaciones
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      console.error("Permisos denegados. No se puede generar el token.");
      return;
    }

    // Obtener el token de Expo
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("Token generado:", token);

    // Guardar el token en Firebase
    if (firestoreId && token) {
      console.log(`Intentando guardar token para firestoreId: ${firestoreId}`);
      await set(ref(database, `jugadores/${firestoreId}/expoPushToken`), token);
      console.log("Token guardado en Firebase.");
    } else {
      console.error("Error: firestoreId o token no son válidos.");
    }
  } catch (error) {
    console.error("Error al guardar el token:", error);
  }
};

export default guardarToken;
