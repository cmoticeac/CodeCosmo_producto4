import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import Mensajes from "./firebase/firebase";
import listenForPlayerChanges from "./firebase/databaseListener"; // Importar el listener para la base de datos

const App = () => {
  const [firestoreId, setFirestoreId] = React.useState(null);

  useEffect(() => {
    const getOrCreateFirestoreId = async () => {
      let id = await AsyncStorage.getItem("firestoreId");
      if (!id) {
        id = uuidv4(); // Generar un ID único
        await AsyncStorage.setItem("firestoreId", id);
        console.log("Nuevo firestoreId generado:", id);
      } else {
        console.log("firestoreId existente:", id);
      }
      setFirestoreId(id); // Guardar el ID en el estado
    };

    getOrCreateFirestoreId();

    // Iniciar el listener para cambios en la base de datos
    listenForPlayerChanges();

  }, []);

  if (!firestoreId) {
    return null; // Esperar a que se obtenga el ID
  }

  return <Mensajes firestoreId={firestoreId} />;
};

export default App;
