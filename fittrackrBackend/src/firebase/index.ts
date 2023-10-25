import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp({
  projectId: 'fittracker-local123'
  // projectId: `${process.env.FIREBASE_PROJECT_ID}`,
});

const db = admin.firestore();
db.settings({
  host: 'localhost:8085',
  ssl: false,
});

export {db}