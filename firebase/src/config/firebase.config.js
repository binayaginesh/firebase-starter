/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FirebaseApiKey,
  authDomain: process.env.REACT_APP_FirebaseAuthDomain,
  projectId: process.env.REACT_APP_FirebaseProjectId,
  storageBucket: process.env.REACT_APP_FirebaseStorageBucket,
  messagingSenderId: process.env.REACT_APP_FirebaseMessagingSenderId,
  appId: process.env.REACT_APP_FirebaseAppId,
  measurementId: process.env.REACT_APP_FirebaseMeasurementId // Added measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
