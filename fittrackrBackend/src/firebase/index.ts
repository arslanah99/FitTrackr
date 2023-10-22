import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp({
  projectId: `${process.env.FIREBASE_PROJECT_ID}`,
});

const db = admin.firestore();
db.settings({
  host: 'localhost:8082',
  ssl: false,
});

export {db}