import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD7jZ9fZcoKkHug4GSfNKprgAu15pqMggs",
    authDomain: "login-beb20.firebaseapp.com",
    projectId: "login-beb20",
    storageBucket: "login-beb20.appspot.com",
    messagingSenderId: "238755829501",
    appId: "1:238755829501:web:0ff353a54db26bd5211094"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);