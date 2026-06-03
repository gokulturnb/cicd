export function calculateCompletedTasks(tasks) {
  return tasks.filter(task => task.completed).length;
}

export function calculateProgress(tasks) {
  if (tasks.length === 0) {
    return 0;
  }

  const completed = calculateCompletedTasks(tasks);
  return Math.round((completed / tasks.length) * 100);
}

export function createTask(title) {
  if (!title || title.trim() === "") {
    throw new Error("Task title cannot be empty");
  }

  return {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };
}