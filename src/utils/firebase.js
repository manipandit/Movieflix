import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA09dHqpPAIJi88J6ypLTqW6jE8xGYEVgo",
  authDomain: "movieflix-da2bb.firebaseapp.com",
  projectId: "movieflix-da2bb",
  storageBucket: "movieflix-da2bb.appspot.com",
  messagingSenderId: "99370260944",
  appId: "1:99370260944:web:1b4fade7834a61d51001d5",
  measurementId: "G-CFYSKCB8KJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
