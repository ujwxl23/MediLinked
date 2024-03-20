import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, update } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAK6jGldivi_kEIzwoADcEPaPOheluRp0g",
  authDomain: "revivetech-59b40.firebaseapp.com",
  databaseURL: "https://revivetech-59b40-default-rtdb.firebaseio.com",
  projectId: "revivetech-59b40",
  storageBucket: "revivetech-59b40.appspot.com",
  messagingSenderId: "659508121680",
  appId: "1:659508121680:web:8450a79a60e22bad750155",
  measurementId: "G-8HM1MZPRPQ",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, auth };
