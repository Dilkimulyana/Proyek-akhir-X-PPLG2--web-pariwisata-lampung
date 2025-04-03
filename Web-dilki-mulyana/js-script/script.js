let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click", function(){
  let items = document.querySelectorAll(".item")
  document.querySelector(".slide").appendChild(items[0])
})
prev.addEventListener("click", function(){
  let items = document.querySelectorAll(".item")
  document.querySelector(".slide").prepend(items[items.length - 1])
})

function disableButton() {
    let btn = document.getElementById("myButton1");
    btn.disabled = true;
    setTimeout(() => { btn.disabled = false; }, 400);
}
function disableButton() {
    let btn = document.getElementById("myButton2");
    btn.disabled = true;
    setTimeout(() => { btn.disabled = false; }, 400);
}

// sidebar 

function showSidebar() {
  const sidebar = document.querySelector(".sidebar")
  const navbar = document.querySelector(".navigator")
  sidebar.style.display = "flex"
  navbar.style.display = "none"
}
function closeSidebar() {
  const sidebar = document.querySelector(".sidebar")
  const navbar = document.querySelector(".navigator")
  sidebar.style.display = "none"
  navbar.style.display = "inline-block"
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    document.querySelector(".backgroundContainer").style.animationPlayState = "paused";
  } else {
    document.querySelector(".backgroundContainer").style.animationPlayState = "running";
  }
});