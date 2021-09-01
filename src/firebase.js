// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRSTprdK7-XCxs8BgPPstwTb6k_GvYUGE",
  authDomain: "personal-website-2766c.firebaseapp.com",
  databaseURL: "https://personal-website-2766c.firebaseio.com",
  projectId: "personal-website-2766c",
  storageBucket: "personal-website-2766c.appspot.com",
  messagingSenderId: "842954854795",
  appId: "1:842954854795:web:c3116b1a38de8f58739f8e",
  measurementId: "G-2G1SXML25L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
