import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBW2TZzcM7tAAiS2zsBGvev4sPBdYnTkrw",
  authDomain: "producto2-63d62.firebaseapp.com",
  databaseURL: "https://producto2-63d62-default-rtdb.firebaseio.com",
  projectId: "producto2-63d62",
  storageBucket: "producto2-63d62.firebasestorage.app",
  messagingSenderId: "549088204019",
  appId: "1:549088204019:web:65790dda1e88fda43b1386",
  measurementId: "G-70LBQTLNL1",
};

// Inicializar Firebase
console.log("Inicializando Firebase...");
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("Firebase inicializado.");

// Función para enviar notificaciones push
const sendPushNotification = async (expoPushToken, title, body) => {
  console.log(`Enviando notificación a: ${expoPushToken}`);
  const message = {
    to: expoPushToken,
    sound: "default",
    title: title,
    body: body,
  };

  try {
    const response = await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });

    const data = await response.json();
    console.log("Respuesta de Expo:", data);
  } catch (error) {
    console.error("Error al enviar la notificación:", error);
  }
};

// Función para obtener tokens de Firebase y enviar notificaciones
const notifyAllUsers = async () => {
  console.log("Obteniendo tokens de Firebase...");
  try {
    const tokensRef = ref(database, "jugadores"); // Cambia "jugadores" si la ruta es diferente
    const snapshot = await get(tokensRef);

    if (snapshot.exists()) {
      console.log("Tokens encontrados en Firebase.");
      const jugadores = snapshot.val();
      Object.keys(jugadores).forEach((userId) => {
        const jugador = jugadores[userId];
        const expoPushToken = jugador.expoPushToken;
        if (expoPushToken) {
          console.log(`Enviando notificación a jugador ${userId}`);
          sendPushNotification(
            expoPushToken,
            "Título de prueba",
            "¡Mensaje de prueba!"
          );
        } else {
          console.log(`El jugador ${userId} no tiene token.`);
        }
      });
    } else {
      console.log("No hay tokens registrados en Firebase.");
    }
  } catch (error) {
    console.error("Error al obtener los tokens:", error);
  }
};

// Ejecutar la función principal
console.log("Iniciando envío de notificaciones...");
notifyAllUsers();
