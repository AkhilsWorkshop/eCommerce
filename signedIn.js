import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { doc, getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";


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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.email;
      document.getElementById("userName").innerText = uid;
      console.log(uid);
      // ...
    } else {
      console.log("User not signed in");
    }
  });

   document.getElementById("signOut").addEventListener('click', function(){
   signOut(auth).then(() => {
    document.getElementById("userName").innerText = "Logged Out";
   }).catch((error) => {
      console.log(errorMessage);
   });
 
 });
  