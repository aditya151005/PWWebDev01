
// getting all the html elements

let decrementBtn = document.getElementById("decrementBtn");

let incrementBtn = document.getElementById("incrementBtn");

let resetBtn = document.getElementById("resetBtn");

let displayValue = document.getElementById("displayValue");

// For decrement button 

decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value > 0) {
    displayValue.innerText = value - 1;
  } else {
    alert("Negative Value is not allowed.");
  }
});

// For increment button 

incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  if (value <= 100) {
    displayValue.innerText = value + 1;
    console.log(value)
  } else {
    alert("100+ values are not allowed");
  }
});

// For reset button

resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});
