import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBw-0b8ydSPIMvU8TKIVN5t-KLiroGWFAA",
	authDomain: "crwn-db-4f4bd.firebaseapp.com",
	projectId: "crwn-db-4f4bd",
	storageBucket: "crwn-db-4f4bd.appspot.com",
	messagingSenderId: "593595736843",
	appId: "1:593595736843:web:edd231515e65b75027380e",
	measurementId: "G-HQEQZCB4QX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
