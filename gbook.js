

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBvaGk0JWvWLKLC_xaihfAQH_ZSR4ebWiQ",
    authDomain: "guestbook-f2d8b.firebaseapp.com",
    projectId: "guestbook-f2d8b",
    storageBucket: "guestbook-f2d8b.appspot.com",
    messagingSenderId: "589525487643",
    appId: "1:589525487643:web:12c5e23b679512eb31a8be",
    measurementId: "G-B4R9E2ZYRK",
    databaseURL: "https://guestbook-f2d8b-default-rtdb.firebaseio.com",
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service


const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
        .add({
            email: email,
            password: password
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}


















const getDate = () => {
    const date = new Date()
    let dateToString = date.toString()
    return dateToString
}

let combinedData = []
const addUserMessage = (e) => {



    e.preventDefault()

    if (document.getElementById("name").value === "" || document.getElementById("message").value === "") { return }
    console.log(name)
    let data = {
        id: getDate(),
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
    }

    // if (data.message || data.name === " ") { return }

    combinedData.push(data)
    console.log(data)
    console.log(combinedData)

    dataShow.innerHTML = combinedData.map(item => `
    <div class="card-group">
    <div class="card border-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">${item.name} says:</div>
      <div class="card-body text-primary">
        <h5 class="card-title">${item.message}</h5>
        <p class="card-text"> ${item.id}</p>
      </div>
      </div>
      
      
       `)
    document.querySelector("form").reset()

    // <div id ="commentCard"><p>${item.name}</p> <p> ${item.message}</p>  <p>${item.id}</p></div>




}






localStorage.setItem("userComments", JSON.stringify(combinedData))



document.getElementById("send").addEventListener("click", addUserMessage)
let dataShow = document.querySelector("#dataShow")








// let data = document.getElementById("#form")
// data.addEventListener("formdata", function (event) {
//     event.preventDefault()
//     let newData = new Data()
//     getFormData()
//     newData.name = document.getElementById("name").value
//     newData.message =
//         console.log(newData)
//     let dataShow = document.getElementById("dataShow")
//     dataShow.innerHTML += `< p > ${ newData.name }</ > <br/> <p>${newData.message}</p></br > `

//     newData = [newData, {

//         name: newData.name,
//         message: newData.message,


//     }]


// })



// form.addEventListener("submit", e => {
//     e.preventDefault()
//     const formData = new FormData(form)

//     const formDataObject = Object.fromEntries(formData, formData.entries())
//     console.log({ ...formDataObject, formDataObject })
//     dataShow.innerHTML = `< p > ${ formDataObject.name }</ > <br/> <p>${formDataObject.message}</p>`

// })