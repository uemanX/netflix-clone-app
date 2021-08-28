import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'netflix-clone-app-69b16.firebaseapp.com',
  projectId: 'netflix-clone-app-69b16',
  storageBucket: 'netflix-clone-app-69b16.appspot.com',
  messagingSenderId: '450349786055',
  appId: '1:450349786055:web:eb85ba2f17c4523d18afe2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
