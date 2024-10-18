const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'dummy-device-token',
});

// Construct a notification message
const message = {
  notification: {
    title: 'New Notification',
    body: 'This is a sample push notification.',
  },
  topic: 'allDevices', // Replace with your topic or token
};

// Send the notification
admin.messaging().send(message)
  .then((response) => {
    console.log('Notification sent successfully:', response);
  })
  .catch((error) => {
    console.error('Error sending notification:', error);
  });