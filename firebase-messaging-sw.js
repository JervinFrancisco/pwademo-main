<<<<<<< HEAD
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkB6MMwDWAhFCMbIkjBHod6jJpnyemrzk",
    authDomain: "pwa-app-71f0a.firebaseapp.com",
    projectId: "pwa-app-71f0a",
    storageBucket: "pwa-app-71f0a.appspot.com",
    messagingSenderId: "6983471809",
    appId: "1:6983471809:web:9b5f702ce27ef8e3a8fa40"
  };

  const app = initializeApp(firebaseConfig);

  const messaging = getMessaging();

  console.log("hey")
=======
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";



const firebaseConfig = {
    apiKey: "AIzaSyCkB6MMwDWAhFCMbIkjBHod6jJpnyemrzk",
    authDomain: "pwa-app-71f0a.firebaseapp.com",
    projectId: "pwa-app-71f0a",
    storageBucket: "pwa-app-71f0a.appspot.com",
    messagingSenderId: "6983471809",
    appId: "1:6983471809:web:9b5f702ce27ef8e3a8fa40"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const messaging = getMessaging();


>>>>>>> e3f1a247cfd4ba3301942d2864c3b141bdbe8e86
