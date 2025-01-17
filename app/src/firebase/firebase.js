import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, onValue } from "firebase/database";

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


const app = initializeApp(firebaseConfig);


const database = getDatabase(app);

 
export { database, ref, set, get, child, onValue };
