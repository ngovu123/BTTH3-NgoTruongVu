import { initializeApp } from 'firebase/app';
import { initializeAuth, setPersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';


const firebaseConfig = {
  apiKey: "AIzaSyAszqXBC-TfxyN6llD3IrW3aBr0E5MlrcU",
  authDomain: "thlab3.firebaseapp.com",
  projectId: "thlab3",
  storageBucket: "thlab3.appspot.com",
  messagingSenderId: "880826263671",
  appId: "1:880826263671:web:724600a094a6bfe8e33e72",
  measurementId: "G-TWC1CPY5ST"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
setPersistence(auth, AsyncStorage);

export { auth };
