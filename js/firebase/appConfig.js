const firebaseConfig = {
  apiKey: "AIzaSyAjPx73GkpvAjNeVHemUcVCV6QVrJ0axZU",
  authDomain: "fir-9-dojo-5dffe.firebaseapp.com",
  projectId: "fir-9-dojo-5dffe",
  storageBucket: "fir-9-dojo-5dffe.appspot.com",
  messagingSenderId: "80428353867",
  appId: "1:80428353867:web:a930f0e5fbb540604c00ce"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Services 
// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
// const projectFunctions = firebase.functions()

//timestame
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// exporting
export { projectFirestore, projectAuth, timestamp, projectStorage } 
