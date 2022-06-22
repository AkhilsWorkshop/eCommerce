import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";

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
 

  document.getElementById("loginForm").addEventListener('submit', function(e){
    e.preventDefault();
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;
    const loginResult = document.getElementById("loginResult");

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then(() => {
        location = "index.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        loginResult.style.display = "block";
        if (errorCode == "auth/wrong-password") {
          loginResult.innerHTML = "Wrong Password";
          document.getElementById("login-password").style.border = "2px solid #f03f3f"
          document.getElementById("login-email").style.border = "1px solid #ded1fd"
        }
        else if (errorCode == "auth/user-not-found") {
          loginResult.innerHTML = "No user found";
          document.getElementById("login-email").style.border = "2px solid #f03f3f"
        }
        else {
          loginResult.innerHTML = "Technical Error occured";
        }
    });
  });
 
 
