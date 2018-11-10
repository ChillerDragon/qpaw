// size.js
const domSizeSelect = document.getElementById("draw-size-dd");
const domSizeSelectField = document.getElementById("draw-size-nf");
domSizeSelectField.value = drawSize; // load default value

// render size dropdown
for (let i = 1; i < 200; i++) {
  if (i == drawSize) { // load default value
    domSizeSelect.innerHTML += `<option selected="selected" value="${i}">${i}</option>`;
  } else {
    domSizeSelect.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

function updateDrawSize(size) {
  if (!size) {
    return; // guard for empty number field (empty str)
  }
  drawSize = size
  // console.log("updated draw size to: " + drawSize);
}

function updateSizeNf() {
    // console.log("number field");
    const newSize = domSizeSelectField.value;
    updateDrawSize(newSize);

    // update the dropdown value
    domSizeSelect.selectedIndex = newSize - 1;
}

function updateSizeDd() {
    // console.log("drop down");
    const newSize = Number.parseInt(domSizeSelect.value, 10);
    updateDrawSize(newSize);

    // update the number field value
    domSizeSelectField.value = newSize;
}

// additional listener to onblur
// to also update the value if the field stays active but enter is pressed
domSizeSelectField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        updateSizeNf();
    }
});
