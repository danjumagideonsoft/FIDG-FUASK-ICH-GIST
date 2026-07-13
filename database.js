import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import app from "./firebase.js";

const db = getFirestore(app);

const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", async function(e) {

    e.preventDefault();

    const studentData = {
        name: document.querySelector("#name").value,
        admissionNumber: document.querySelector("#admission").value,
        level: document.querySelector("#level").value,
        department: "Industrial Chemistry",
        email: document.querySelector("#email").value,
        status: "Pending Verification"
    };

    try {

        await addDoc(collection(db, "students"), studentData);

        alert("Registration submitted. Waiting for verification.");

    } catch(error) {

        alert(error.message);

    }

});
