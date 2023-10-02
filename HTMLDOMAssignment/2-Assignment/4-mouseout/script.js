//  get the box area

let boxElement = document.getElementById("box");

// Adding a click event listener to the box area

boxElement.addEventListener("mouseout", () => {
  alert("you left the safe zone 🙅 (mouse out event working properly)");
});
