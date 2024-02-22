import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
    var error = null
    var isPending = false

    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {
        try{
            const res = await docRef.delete()
            isPending = true
            error = null

            return res
        } catch(err){
            console.log(err.message)
            isPending = false
            error = "Could not delete the document!"
        }
    }

    const updateDoc = async (updates) => {
        try{
            const res = await docRef.update(updates)
            isPending = true
            error = null

            return res
        } catch(err){
            console.log(err.message)
            isPending = false
            error = "Could not update the document!"
        }
    } 

    return { error, isPending, deleteDoc, updateDoc }
}

export default useDocument