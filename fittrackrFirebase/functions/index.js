// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

const {onRequest} = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const admin = require('firebase-admin');

admin.initializeApp();

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', {structuredData: true});
  response.send('Hello from Firebase!');
});
exports.getEmojis = onRequest((request, response) => {
  const emojis = ['😀', '😂', '😍', '🥳', '🤩'];
  response.send(emojis);
});

//Registration Function
exports.register = onRequest(async (req, res) => {
  const {email, password} = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    res.status(201).send(userRecord);
  } catch (error) {
    res.status(400).send(error);
  }
});
