import './App.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FormTitle from './components/FormTitle'
import FormTextInput from './components/FormTextInput'
import LoadingScreen from './components/LoadingScreen'
import fetchData from './utils/fetchData'
import getRandomId from './utils/getRandomId'
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';

export default function App () {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2" className="Title">
        To-Do List
      </Typography>

      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);