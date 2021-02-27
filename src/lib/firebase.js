
const config = {
    apiKey: "AIzaSyCOlTCQLeAZjwTKqvxzx3rJlheZ-apwQPk",
    authDomain: "rentificatr.firebaseapp.com",
    projectId: "rentificatr",
    storageBucket: "rentificatr.appspot.com",
    messagingSenderId: "199563922450",
    appId: "1:199563922450:web:c5dad32c136b9854059ccb"
  };

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };