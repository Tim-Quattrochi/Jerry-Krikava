// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvaGk0JWvWLKLC_xaihfAQH_ZSR4ebWiQ",
    authDomain: "guestbook-f2d8b.firebaseapp.com",
    databaseURL: "https://guestbook-f2d8b-default-rtdb.firebaseio.com",
    projectId: "guestbook-f2d8b",
    storageBucket: "guestbook-f2d8b.appspot.com",
    messagingSenderId: "589525487643",
    appId: "1:589525487643:web:12c5e23b679512eb31a8be",
    measurementId: "G-B4R9E2ZYRK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, set, get, update, remove, ref, child, push }

    from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js"


const db = getDatabase();

// Create a new post reference with an auto-generated id
const generateRandomId = () => {
    const postListRef = ref(db, 'posts')
    const newPostRef = push(postListRef)
}


//declare variables to grab elements from the DOM

let enterName = document.getElementById("name")
let enterMessage = document.getElementById("message")
let renderPosts = document.getElementById("dataShow")
let sendBtn = document.getElementById("send")
let findName = document.querySelector("#findName")
let findBtn = document.getElementById("find")

const getDate = () => {
    const date = new Date().toLocaleString('en-us',
        {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "numeric", minute: "numeric"
        })

    let dateToString = date.toString()
    return dateToString
}

generateRandomId()

function insertData() {
    event.preventDefault()
    push(ref(db, "users/"), {
        date: getDate(),
        name: enterName.value,
        message: enterMessage.value,
    })
        .then(() => {
            alert("Success")
        })
        .catch((error) => {
            alert(error)
        })
    location.reload();
}


//get comment posts from firebase. Working 09/07/2022
function upDateData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users`)).then((snapshot) => {

        if (snapshot.exists()) {
            const commentValues = Object.values(snapshot.val())
            let dataShow = document.getElementById("dataShow")

            //Render the guest book posts with bootstrap classes.
            dataShow.innerHTML = commentValues.map((user) => `<div class="card-group">
   <div class="card border-primary mb-3" style="max-width: 18rem">
   <div class="card-header">${user.name} says:</div>
   <div class="card-body text-primary">
   <h5 class="card-title">${user.message}</h5>
    <p class="card-text"> ${user.date}</p>
    </div>
    </div>
    `)
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

}

upDateData()

function removeData() {
    //Work on removing a comment
    //Authenticated user will be able
    //to modify/delete own submission.
}

sendBtn.addEventListener("click", insertData)
