import { initializeApp } from "firebase/app";
import {  getDatabase, ref, get , update } from "firebase/database";
import { getToken } from "firebase/messaging";


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

console.log("Inicializando Firebase...");
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log("Firebase inicializado.");


const sendPushNotification = async (expoPushToken, title, body) => {
  console.log(`Enviando notificación a: ${expoPushToken}`);
  const message = {    to: expoPushToken,    sound: "default",  title: title,   body: body,  };


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


const notifyAllUsers = async () => {
  console.log("Obteniendo tokens de Firebase...");
  try {
    const snapshot = await get(ref(database, 'jugadores'));

    if (snapshot.exists()) {
      console.log("Tokens encontrados en Firebase.");
      const jugadores = snapshot.val();

      for (const firestoreId of Object.keys(jugadores)) {
              const jugador = jugadores[firestoreId];
              const expoPushToken = jugador.expoPushToken;

              if (expoPushToken) {
                  console.log(`Enviando notificación a jugador ${firestoreId}`);
                  await sendPushNotification(expoPushToken,"mensaje 1","mensaje 1_2");
              } else {
                  console.log(`El jugador ${firestoreId} no tiene token.`);
                  const defaultToken = `token_generado_${firestoreId}`;

                  try {

                      await update(ref(database, `jugadores/${firestoreId}`), {
                          expoPushToken: defaultToken,
                      });
                      console.log(`Se asignó un token por defecto al jugador ${firestoreId}`);
                  } catch (error) {
                      console.error(`Error al actualizar el token para ${firestoreId}:`, error);
                  }
              }
          }

    } else {
          console.log("No hay tokens registrados en Firebase.");
    }


  } catch (error) {
    console.error("Error al obtener los tokens:", error);
  }
};


console.log("Iniciando envío de notificaciones...");
notifyAllUsers();
