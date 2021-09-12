const firebaseConfig = {
    apiKey: "AIzaSyA9dhpwR7ax_Uk6TycQP_hTv2boNK9IemU",
    authDomain: "to-do-list-live.firebaseapp.com",
    projectId: "to-do-list-live",
    storageBucket: "to-do-list-live.appspot.com",
    messagingSenderId: "709775176129",
    appId: "1:709775176129:web:344d28ac48de4a5aadff40",
    measurementId: "G-Q1ZBN6MP2X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();