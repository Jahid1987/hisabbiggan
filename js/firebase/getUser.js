import { projectAuth } from './appConfig.js'

// refs
var user = projectAuth.currentUser;

// auth changes
projectAuth.onAuthStateChanged(_user => {
  console.log('User state change. Current user is:', _user);
  // saving user in sessionStorage
  // sessionStorage.setItem('user', _user.email);
  user = _user;
});

const getUser = () => {
  return { user }
}

export default getUser