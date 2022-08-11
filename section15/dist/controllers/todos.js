"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
let TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const id = req.params.id;
    const newTodoText = req.body.text;
    console.log(newTodoText);
    TODOS = TODOS.map((todo) => todo.id === id ? new todo_1.Todo(todo.id, newTodoText) : todo);
    const newTodo = TODOS.find((todo) => todo.id === id);
    res.json({ message: "Updated the todo.", updatedTodo: newTodo });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const id = req.params.id;
    TODOS = TODOS.filter((todo) => todo.id !== id);
    res.json({ message: "Deleted the todo." });
};
exports.deleteTodo = deleteTodo;
