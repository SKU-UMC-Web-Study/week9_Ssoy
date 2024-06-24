

import React from 'react';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
//import './App.css';

const App =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main>
        <InputTodo />
        <TodoList />
      </main>
    </div>
  );
}

export default App;

