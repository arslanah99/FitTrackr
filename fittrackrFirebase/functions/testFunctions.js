const functions = require("firebase-functions");

exports.getEmojis = functions.https.onRequest((request, response) => {
  const emojis = ["😀", "😂", "😍", "🥳", "🤩"];
  response.send(emojis);
});
