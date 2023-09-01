import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD2SiXbGLlTMprs62FVtbkwd-VDhpdrrPw",
    authDomain: "job-x-a3da1.firebaseapp.com",
    projectId: "job-x-a3da1",
    storageBucket: "job-x-a3da1.appspot.com",
    messagingSenderId: "25196629775",
    appId: "1:25196629775:web:05c6dff83fd0924aedb87a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);