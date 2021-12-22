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


    Notification.requestPermission().then(permission =>{
        if (permission =='granted') {
         messaging.getToken({vapidKey:"BGXCNFZSAJDiKHLS_BNyCRpJa7Dn-TIjlAuTbUfm4mN__mHzpzYAOl5FusJ_MSuo6tuBZRGuyMQzF-L3kVKBoCo"}).then(currentToken =>{
             console.log(currentToken)
         })
          }
          if (permission === 'denied') {
            console.log('Permission wasn\'t granted. Allow a retry.');
            return;
          }
        });
     

