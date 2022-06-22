import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
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
 

  document.getElementById("registerForm").addEventListener('submit', function(e){
    e.preventDefault();
    const registerName = document.getElementById("register-name").value;
    const registerEmail = document.getElementById("register-email").value;
    const registerNumber = document.getElementById("register-number").value;
    const registerPassword = document.getElementById("register-password").value;
    const registerResult = document.getElementById("registerResult");

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        .then((userCredential) => {
            registerResult.innerHTML="Account created succesfully! Redirecting....";
            registerResult.style.display = "block";
            registerResult.style.backgroundColor = "#93ddba";
            registerResult.style.border = "1px solid #27b975";
            return addDoc(collection(db, "users"),{
                Name: registerName,
                Email: registerEmail,
                Mobile: registerNumber,
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
        });
    });
 
 
 
 
//  document.getElementById("log-out-btn").addEventListener('click', function(){
//    signOut(auth).then(() => {
//    }).catch((error) => {
//       document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
//    });
 
//  });
  