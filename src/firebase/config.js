import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9SJjmlRzBNG-2FyqotO-uTHqycrYiiHc",
  authDomain: "miniblogbase.firebaseapp.com",
  projectId: "miniblogbase",
  storageBucket: "miniblogbase.appspot.com",
  messagingSenderId: "756856293810",
  appId: "1:756856293810:web:c7d16c3cd6a1da427efcab"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};