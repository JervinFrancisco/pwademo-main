if("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js", "./firebase-messaging-sw.js").then(registration =>{
    console.log("SW Registered!");
    console.log(registration)
}).catch(error =>{
    console.log("SW Registered Failed!");
    console.log(error)
})
}

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./firebase-messaging-sw.js").then(registration =>{
        console.log("SW Registered!");
        console.log(registration)
    }).catch(error =>{
        console.log("SW Registered Failed!sdasdsd");
        console.log(error)
    })
    }
    

let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

function flip(){
  cardElement.classList.toggle("flipped")
}

function startTime() {
    var weekday = new Array();
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];
  
    m = checkTime(m);
    s = checkTime(s);
                    document.getElementById('date').innerHTML =
    d;
 document.getElementById('day').innerHTML =
    wd;
 document.getElementById('month').innerHTML =
    mt + "/" + y;
    
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

  console.log(app)

import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BGXCNFZSAJDiKHLS_BNyCRpJa7Dn-TIjlAuTbUfm4mN__mHzpzYAOl5FusJ_MSuo6tuBZRGuyMQzF-L3kVKBoCo' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

console.log(messaging)