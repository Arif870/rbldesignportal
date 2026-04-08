// Import the core Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Your exact Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfc5uqQpqikbSZlRwkVIW-3M8wuxYhMHQ",
  authDomain: "rbl-design-portal.firebaseapp.com",
  projectId: "rbl-design-portal",
  storageBucket: "rbl-design-portal.firebasestorage.app",
  messagingSenderId: "238695990263",
  appId: "1:238695990263:web:c395e8006484b0dcc324f2",
  measurementId: "G-QBEXB70PM1"
};

// Initialize Firebase & Export Database
let db = null;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("Firebase Successfully Initialized from external file!");
} catch (err) {
  console.error("Firebase setup missing or invalid:", err);
}

// Export the 'db' variable so custom.html can use it
export { db };
