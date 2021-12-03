// Import the functions you need from the SDKs you need

import {
    initializeApp
} from "firebase/app";

// import {
//     getAnalytics
// } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyD084og-SO0Eps61HqmVI1KzlBoGMtf9RM",

    authDomain: "vuetify-todo-f3d1a.firebaseapp.com",

    projectId: "vuetify-todo-f3d1a",

    storageBucket: "vuetify-todo-f3d1a.appspot.com",

    messagingSenderId: "212469029795",

    appId: "1:212469029795:web:e5a9c640a0a64d580d9816",

    measurementId: "G-J1Q62J3JTK"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
// const db = app.();

// db.settings({
//     timestampsInSnapshots: true
// });

export default app;