import { projectAuth } from "./firebase/appConfig.js";

const login = document.querySelectorAll(".login");
const profile = document.querySelectorAll(".profile");

const createUser = document.querySelector("#createUser");
const logOutUser = document.querySelector("#logOutUser");
const loginUser = document.querySelector("#loginUser");

// Creating user
createUser.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = createUser.email.value;
  const psw = createUser.psw.value;

  projectAuth.createUserWithEmailAndPassword(email, psw).then((cred) => {
    if (cred) {
      createUser.reset();
      document.getElementById("singupForm").style.display = "none";
    }
  });
});

// log out user
logOutUser.addEventListener("submit", (e) => {
  e.preventDefault();
  projectAuth.signOut().then(() => {
    document.getElementById("userProfile").style.display = "none";
  });
});

// Login user
loginUser.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginUser.email.value;
  const psw = loginUser.psw.value;
  console.log(email, psw);
  projectAuth.signInWithEmailAndPassword(email, psw).then((cred) => {
    loginUser.reset();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("userProfile").style.display = "block";
  });
});

// Changing ui based on user
projectAuth.onAuthStateChanged((user) => {
  if (user) {
    profile.forEach((item) => (item.style.display = "inline"));
    login.forEach((item) => (item.style.display = "none"));
  } else {
    login.forEach((item) => (item.style.display = "inline"));
    profile.forEach((item) => (item.style.display = "none"));
  }
});
