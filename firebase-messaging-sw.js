import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-messaging.js";

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
getToken(messaging, { vapidKey: 'BPVUEv2NnZwuHUkcprFyuMUxCvUkLUmobWAMuA9j_Dk39OMc_sfV3KUn1dokJ8a09-j4KpaHqlqAgkEe2W3UBac' }).then((currentToken) => {
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