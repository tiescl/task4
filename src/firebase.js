import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "itransition-task4-8ce0b.firebaseapp.com",
    projectId: "itransition-task4-8ce0b",
    storageBucket: "itransition-task4-8ce0b.appspot.com",
    messagingSenderId: "953478104783",
    appId: "1:953478104783:web:a8fbccdc94fbc0be42d9ba"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export default app;