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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return; //if there is no user passed i'll leave

	const userRef = firestore.doc(`users/${userAuth.uid}`); //refers to the path of this user object in the db
	const snapShot = await userRef.get(); //gets a copy of the up-to-date user info (to this moment)

	//if the information does not exist it'll create a new entry in the db
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}

	return userRef; //returns the "pointer" to the object location
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
