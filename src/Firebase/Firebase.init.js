import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import firebaseConfig from "./Firebase.config";

const initialBooks = () => {
    const app = initializeApp(firebaseConfig);
    return getFirestore(app)
}

export default initialBooks;