import { projectFirestore } from './appConfig.js'

const useCollection = (collection, id) => {

  var error = null;
  var isPanding = false;

  // add a new document
  const addDoc = async (doc) => {
    error = null;
    isPanding = true;

    try {
      const res = await projectFirestore.collection(collection).add(doc)
      
      isPanding = false;

      return res;
    }
    catch(err) {
      error = err.message;
      isPanding = false;
    }
  }

  return { error, addDoc, isPanding }

}


export default useCollection