import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
	apiKey: "AIzaSyDNGXIYb3fd-_spky08fN_ijr7H8-qHf7Y",
	authDomain: "pragosacademyapi.firebaseapp.com",
	databaseURL:
		"https://pragosacademyapi-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "pragosacademyapi",
	storageBucket: "pragosacademyapi.appspot.com",
	messagingSenderId: "667914307154",
	appId: "1:667914307154:web:716816b5e3e13c6db2018b",
};

const app = initializeApp(config);
export const db = getDatabase(app);
