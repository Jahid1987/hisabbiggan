//sub top nav bar
// toggle bars and sidepanel

let sidepanel = false; //global variable I can use it in all functions
const sidepanelItems = document.querySelector("#mySidepanel").children;

function controllSidepanel(e) {
  e.classList.toggle("change");
  toggleSidepanel((sidepanel = !sidepanel));
}

const toggleSidepanel = (sidepanel) => {
  if (sidepanel) {
    document.getElementById("mySidepanel").style.width = "200px";
  } else {
    document.getElementById("mySidepanel").style.width = "0";
  }
};

Array.from(sidepanelItems).forEach((item) => {
  if (location.pathname.indexOf(item.pathname) !== -1) {
    item.classList.add("active");
  }
});
