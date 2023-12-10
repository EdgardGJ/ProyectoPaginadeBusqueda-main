  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDqExD2gv9ugYQz9m5jbzL83i2fRWjR10o",
    authDomain: "userdates-1b0fa.firebaseapp.com",
    projectId: "userdates-1b0fa",
    storageBucket: "userdates-1b0fa.appspot.com",
    messagingSenderId: "736232552858",
    appId: "1:736232552858:web:7e893623875938cacfe223",
    measurementId: "G-WMWKKW9716"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  document.getElementById('formulario-de-registro').addEventListener('submit', function(event) {
    event.preventDefault();
       
       const db = firebase.firestore();
       let username = document.getElementById('username').value;
       let password = document.getElementById('password').value;
       let passwordConfirm = document.getElementById('password-confirm').value;
       let email = document.getElementById('email').value;
   
       db.collection("UserDates").add({
           username: username,
           password: password,
           email: email
       })
       .then(function(docRef) {
           console.log("Usuario Registrado con éxito:", docRef.id);
           //agregar cualquier acción adicional aquí, como redirigir al usuario a la pagina de inicio
       })
       .catch(function(error) {
           console.error("Error al registrar el usuario:", error);
       })
   })

   document.getElementById('formulario-inicio-de-sesión').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;

    //para buscar el usuario en firestore
    db.collection("UserDates")
    .where("username", "==", username)
    .where("password", "==", password)
    .get()
    .then(function(querySnapshot) {
        if (!querySnapshot.empty) {
            //usuario válido, permitimos acceso.
            //Realizamos cualquier otr acción como redireccionar a pagina de inicion
        } else{
            //credenciales incorrectas
            console.log("Datos incorectos");
        }
    })
    .catch(function(error) {
        console.log("Error al iniciar sesión:", error);
    })
})