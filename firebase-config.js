// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7yMNspBiWohm0TTyfAeYdc-lFeDftRgA",
  authDomain: "for-jaimu.firebaseapp.com",
  projectId: "for-jaimu",
  storageBucket: "for-jaimu.firebasestorage.app",
  messagingSenderId: "408356296822",
  appId: "1:408356296822:web:5477e1fa7aa003502a6757",
  measurementId: "G-E621JP8MCY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };