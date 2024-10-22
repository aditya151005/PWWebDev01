let itemContainer = [];

function addItem() {
  let originalItem = document.getElementById('user-item').value;
  let temporaryItem=originalItem.toLowerCase();
  if (!temporaryItem) {
    alert("Please enter an item.");
    return;
  }
  
  if (!itemContainer.includes(temporaryItem)) {
    itemContainer.push(temporaryItem);
    alert("Successfully added item.");
  } else {
    alert("Item already added.");
  }
}

document.getElementById('submit-btn').addEventListener("click", addItem);