import { database, ref, onValue } from "./firebase";
import sendPushNotification from "./sendNotification";

const listenForPlayerChanges = () => {
  const playersRef = ref(database, "jugadores");

  // Estado local para comparar cambios
  let currentPlayers = {};

  // Escuchar cambios en el nodo "jugadores"
  onValue(playersRef, (snapshot) => {
    const newData = snapshot.val();
    console.log("Datos actuales en jugadores:", newData);

    if (!newData) {
      console.log("No se encontraron datos en la base de datos.");
      return;
    }

    Object.entries(newData).forEach(([firestoreId, player]) => {
      console.log(`Procesando jugador: ${firestoreId} - ${JSON.stringify(player)}`);
    });

    // Actualizar el estado local después de procesar
    currentPlayers = newData;

    // Comparar los nuevos datos con el estado actual
    for (const firestoreId in newData) {
      const player = newData[firestoreId];

      // Detectar nuevos jugadores
      if (!currentPlayers[firestoreId]) {
        console.log(`Nuevo jugador añadido: ${player.nombre}`);
        if (player.expoPushToken) {
          sendPushNotification(
            player.expoPushToken,
            "¡Nuevo jugador añadido!",
            `Se ha añadido a ${player.nombre} ${player.apellido} al equipo.`
          );
        }
      } else if (
        JSON.stringify(currentPlayers[firestoreId]) !== JSON.stringify(player)
      ) {
        // Detectar jugadores editados
        console.log(`Jugador actualizado: ${player.nombre}`);
        if (player.expoPushToken) {
          sendPushNotification(
            player.expoPushToken,
            "Jugador actualizado",
            `Los datos de ${player.nombre} ${player.apellido} se han modificado.`
          );
        }
      }
    }

    // Actualizar el estado local
    currentPlayers = newData;
  });
};

export default listenForPlayerChanges;
