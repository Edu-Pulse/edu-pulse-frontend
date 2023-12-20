import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
	apiKey: "AIzaSyDdVOJdkm_w_Acy04UuosmAVnGG9C2U0HU",
	authDomain: "pragos-academy.firebaseapp.com",
	databaseURL:
		"https://pragos-academy-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "pragos-academy",
	storageBucket: "pragos-academy.appspot.com",
	messagingSenderId: "147129190798",
	appId: "1:147129190798:web:bcafb58c4d2d4f8de5bcdf",
	measurementId: "G-4GNFPLEK91",
};

export const firebaseApp = initializeApp(config);
export const database = getDatabase(firebaseApp);
