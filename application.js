  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcwEQ2sxI_CYxv7hHKRxuAqlSTGtdWTq8",
    authDomain: "signup-form-706a5.firebaseapp.com",
    projectId: "signup-form-706a5",
    storageBucket: "signup-form-706a5.appspot.com",
    messagingSenderId: "864589880424",
    appId: "1:864589880424:web:5ff241f9d6007bb301afdd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()

  //Getting All the Objects of html
  var firstname = document.getElementById("firstname")
  var lastname = document.getElementById("lastname")
  var email = document.getElementById("Email")
  var passwords = document.getElementById("password")

  //making a function for storing data
  window.signup = function (e) {
    e.preventDefault();
    var obj = {
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value,
      passwords:passwords.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.passwords)
    .then(function(success){
      alert("Signup Successfully")
    })
    .catch(function(err){
      alert("error" + err)
    })
    .console.log(obj)
  };