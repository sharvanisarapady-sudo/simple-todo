function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  let li = document.createElement("li");

  // Task text span (so we can toggle completed)
  let span = document.createElement("span");
  span.textContent = taskText;
  span.style.cursor = "pointer";

  // Toggle completed on click
  span.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    li.remove();
  };

  // Append text + delete button
  li.appendChild(span);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}