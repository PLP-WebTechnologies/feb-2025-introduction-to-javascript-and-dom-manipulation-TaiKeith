// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
  const textElement = document.getElementById("info-text");
  textElement.textContent = "Text has been updated!";
  textElement.style.color = "blue";
  textElement.style.fontWeight = "bold";
});

// Add/remove a box dynamically
document.getElementById("toggle-box-btn").addEventListener("click", function () {
  const container = document.getElementById("box-container");
  const existingBox = document.getElementById("dynamic-box");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.id = "dynamic-box";
    newBox.textContent = "I’m a new box!";
    newBox.style.backgroundColor = "lightgreen";
    newBox.style.padding = "10px";
    newBox.style.marginTop = "10px";
    newBox.style.border = "2px solid darkgreen";
    container.appendChild(newBox);
  }
});
