import { projectFirestore } from "./appConfig.js";

const getCollection = (collection, query) => {
  var documents = null;
  var error = null;

  // register the firestore collection reference
  let collectionRef;

  if (query) {
    collectionRef = projectFirestore
      .collection(collection)
      .where(...query)
      .orderBy("createdAt");
  } else {
    collectionRef = projectFirestore
      .collection(collection)
      .orderBy("createdAt");
  }

  collectionRef.onSnapshot(
    (snap) => {
      let results = [];
      snap.docs.forEach((doc) => {
        // must wait for the server to create the timestamp & send it back
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      // update values
      documents = results;
      error = null;
    },
    (err) => {
      console.log(err.message);
      documents = null;
      error = "could not fetch the data";
    }
  );

  // watchEffect((onInvalidate) => {
  //   onInvalidate(() => unsub());
  // });

  return { error, documents };
};

export default getCollection;
