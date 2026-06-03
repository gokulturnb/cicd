import { test, expect } from "vitest";

import {
  calculateCompletedTasks,
  calculateProgress,
  createTask
} from "../src/taskUtils.js";

test("calculates completed tasks correctly", () => {
  const tasks = [
    { title: "Learn Git", completed: true },
    { title: "Learn GitHub Actions", completed: false },
    { title: "Deploy project", completed: true }
  ];

  expect(calculateCompletedTasks(tasks)).toBe(2);
});

test("calculates progress percentage correctly", () => {
  const tasks = [
    { title: "Task 1", completed: true },
    { title: "Task 2", completed: false },
    { title: "Task 3", completed: true },
    { title: "Task 4", completed: false }
  ];

  expect(calculateProgress(tasks)).toBe(50);
});

test("returns 0 progress when there are no tasks", () => {
  expect(calculateProgress([])).toBe(0);
});

test("creates a valid task", () => {
  const task = createTask("Learn CI/CD");

  expect(task.title).toBe("Learn CI/CD");
  epect(task.completed).toBe(false);
});

test("throws error for empty task title", () => {
  expect(() => createTask("")).toThrow("Task title cannot be empty");
});