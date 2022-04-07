import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";
export default function index() {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  return (
    <div style={{ textAlign: "center" }}>
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}
