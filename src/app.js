import {
  calculateCompletedTasks,
  calculateProgress,
  createTask
} from "./taskUtils.js";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const progressText = document.getElementById("progressText");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task-item";

    const title = document.createElement("span");
    title.textContent = task.title;
    title.className = task.completed ? "task-title completed" : "task-title";

    title.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      renderTasks();
    });

    li.appendChild(title);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  updateStats();
}

function updateStats() {
  totalTasks.textContent = tasks.length;
  completedTasks.textContent = calculateCompletedTasks(tasks);
  progressText.textContent = `${calculateProgress(tasks)}%`;
}

function addTask() {
  try {
    const task = createTask(taskInput.value);
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  } catch (error) {
    alert(error.message);
  }
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    addTask();
  }
});

renderTasks();