import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC781QqxTBexL0mo4V3AiTOdokt1d2vF2M",
    authDomain: "facebook-clone-1f098.firebaseapp.com",
    projectId: "facebook-clone-1f098",
    storageBucket: "facebook-clone-1f098.appspot.com",
    messagingSenderId: "102029208541",
    appId: "1:102029208541:web:0c11a71d8111a301df2434",
    measurementId: "G-9TL263EG7L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db;



// ? is it safe to put your firebase config in the frontend? 
// yes, firebase has some protected script measure in place so it is safe

