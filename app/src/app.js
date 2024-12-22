import React from "react";
import { StyleSheet, View } from "react-native";
import Mensajes from "./firebase/mensajes"; // Ajusta la ruta según tu estructura

export default function App() {
  const firestoreId = "-OBrPAKR1fusdH59NKDg"; // Ajusta con un firestoreId válido

  return (
    <View style={styles.container}>
      <Mensajes firestoreId={firestoreId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

