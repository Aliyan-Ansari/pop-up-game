// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCg-hRrdGKROYbHJzeDH7nATrL7_aMCXXw",
    authDomain: "popup-a24c3.firebaseapp.com",
    projectId: "popup-a24c3",
    storageBucket: "popup-a24c3.appspot.com",
    messagingSenderId: "179478097563",
    appId: "1:179478097563:web:a5b8f37e500a393da8203e",
    measurementId: "G-BV3G9BTNNQ"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();


let signInWithGoogle = document.querySelector('#signInWithGoogle');
(signInWithGoogle) ? signInWithGoogle.addEventListener('click', ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
    window.location = "game.html";
    // /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;

    // // This gives you a Google Access Token. You can use it to access the Google API.
    let token = credential.accessToken;
    // // The signed-in user info.
    let user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;
    // ...
  });
}) : console.log();




function signInFormFunc(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // window.location.href = './ui.html';
      window.location.replace("game.html");
      signInForm.reset();
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      let wrong = document.getElementById('wrong');
      wrong.innerHTML = `<div class="alert alert-warning" role="alert">
                           ${error.message}
                        </div>`;
      setTimeout(() => {
        wrong.innerHTML = "";
      }, 5000);
    });

}
// get sign in form from DOM

let signInForm = document.getElementById('signInForm');
(signInForm) ? signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  signInFormFunc(email, password);

}) : console.log();


//  sign up function connect with firebase

function signUpFormFunc(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // window.location.href = './ui.html';
      window.location.replace("game.html");
      signUpForm.reset();
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

// // get sign up from DOM

let signUpForm = document.querySelector('#signUpForm');
(signUpForm) ? signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let userName = document.getElementById('fullNames').value;
  let email = document.getElementById('emails').value;
  let password = document.getElementById('passwords').value;
  signUpFormFunc(email, password);
  signUpForm.reset();

}) : console.log();



// logout the user
function sign_out(){
auth.signOut().then(() => {
  window.location.replace("index.html");
}).catch((error) => {

});
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      console.log('Signed in');
      
    } else {
        console.log('signed out');
    }
});