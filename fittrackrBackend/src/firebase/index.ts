// firebase.js: File for initializing Firebase Admin SDK.
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp({
  projectId: `${process.env.FIREBASE_PROJECT_ID}`,
});

const db = admin.firestore();
db.settings({
  host: "localhost:8082", // Replace with your Firestore emulator port
  ssl: false,
});

module.exports = db;
