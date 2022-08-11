import { RequestHandler } from "express";
import { Todo } from "../models/todo";

let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  const newTodoText = (req.body as { text: string }).text;
  console.log(newTodoText);

  TODOS = TODOS.map<Todo>((todo) =>
    todo.id === id ? new Todo(todo.id, newTodoText) : todo
  );

  const newTodo = TODOS.find((todo) => todo.id === id);
  res.json({ message: "Updated the todo.", updatedTodo: newTodo });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  TODOS = TODOS.filter((todo) => todo.id !== id);

  res.json({ message: "Deleted the todo." });
};
