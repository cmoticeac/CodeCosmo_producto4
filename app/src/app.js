import React, { useEffect } from "react";
import guardarToken from "./firebase/mensajes";

const App = () => {
  const firestoreId = "-OBrPAKR1fusdH59NKDg"; // Cambia por un firestoreId válido de Firebase

  useEffect(() => {
    if (firestoreId) {
      guardarToken(firestoreId);
    }
  }, [firestoreId]);

  return <></>;
};

export default App;
