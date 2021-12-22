importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js")

const firebaseConfig = {
    apiKey: "AIzaSyCkB6MMwDWAhFCMbIkjBHod6jJpnyemrzk",
    authDomain: "pwa-app-71f0a.firebaseapp.com",
    projectId: "pwa-app-71f0a",
    storageBucket: "pwa-app-71f0a.appspot.com",
    messagingSenderId: "6983471809",
    appId: "1:6983471809:web:9b5f702ce27ef8e3a8fa40"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging()