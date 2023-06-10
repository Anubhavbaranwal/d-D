let Lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let LeftBox = document.getElementById("left");
let resetButton = document.getElementById("resetButton");

for (let List of Lists) {
  List.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
    });
    LeftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    LeftBox.addEventListener("drop", function (e) {
      LeftBox.appendChild(selected);
      selected = null;
    });
  });
}

resetButton.addEventListener("click", function () {
  while (rightBox.firstChild) {
    LeftBox.appendChild(rightBox.firstChild);
  }
});
