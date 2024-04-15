// for bgcolor

const box = document.getElementById("box");

const heading = document.getElementById("heading");
const switch_btn = document.getElementById("switch");

console.log(switch_btn);

switch_btn.addEventListener("click", () => {
  if (switch_btn.classList.contains("on")) {
    box.style.cssText = "background: black";
    heading.style.cssText = "color: white";
    switch_btn.style.cssText = "margin-left:4rem";
    switch_btn.classList.remove("on");

    console.log("on");
  } else {
    switch_btn.classList.add("on");
    box.style.cssText = "background: white";
    heading.style.cssText = "color: black";
    switch_btn.style.cssText = "margin-left:0rem";
    console.log("off");
  }
});
