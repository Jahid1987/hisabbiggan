// Chapter navigation
const topnavItems = document.querySelectorAll('.scrollmenu a')

topnavItems.forEach(item => {
    item.addEventListener('click', () => {
        hideAll();
        item.classList.add('active')
    })
})

function hideAll(){
    topnavItems.forEach(item => item.classList.remove('active'))
}

// Bottom navigation like mobile
const listItems = document.querySelectorAll('nav ul li')
listItems.forEach((item) => {
    item.addEventListener('click', () => {
        hideAllItems()
        item.classList.add('active')
    })
})

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}
// Sign up form
function openSignupForm() {
    closeLoginForm();
    document.getElementById("singupForm").style.display = "block";
  }
  
  function closeSignupForm() {
    document.getElementById("singupForm").style.display = "none";
  }

// Login form 
function openLoginForm() {
    closeSignupForm();
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
  }
// user profile
function openUserProfile() {
    closeLoginForm();
    document.getElementById("userProfile").style.display = "block";
  }
  
  function closeUserProfile() {
    document.getElementById("userProfile").style.display = "none";
  }
