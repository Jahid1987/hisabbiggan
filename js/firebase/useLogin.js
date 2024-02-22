import { projectAuth } from './appConfig.js'

var error = null
var isPanding = false

const login = async (email, password) => {
  error = null
  isPanding = true

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    
    error = null
    isPanding = false
    
    return res
  }
  catch(err) {
    // console.log(err.message)
    error = "Incorrect login Credentials!"
    isPanding = false
  }
}



const useLogin = () => {
  return { error, login, isPanding }
}

export default useLogin