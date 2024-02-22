import { projectAuth } from './appConfig.js'

var error = null
var isPanding = false

const signup = async (email, password, displayName) => {
  error = null
  isPanding = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete signup')
    }
    await res.user.updateProfile({ displayName })
    
    error = null
    isPanding = false
    
    return res
  }
  catch(err) {
    // console.log(err.message)
    error = err.message
    isPanding = false
  }
}


const useSignup = () => {
  return { error, signup, isPanding }
}

export default useSignup