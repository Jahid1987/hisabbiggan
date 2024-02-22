import { projectAuth } from './appConfig.js'

// refs
var error = null
var isPanding = false

// logout function
const logout = async () => {
  error = null
  isPanding = true

  try {
    await projectAuth.signOut()
    
    isPanding = false
  }
  catch(err) {
    console.log(err.message)
    error = err.message
    isPanding = false
  }
}

const useLogout = () => {
  return { error, logout, isPanding }
}

export default useLogout