import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import app from "./firebase.js";

const auth = getAuth(app);

const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Registration successful!");
        console.log(userCredential.user);
    })
    .catch((error) => {
        alert(error.message);
    });
});
