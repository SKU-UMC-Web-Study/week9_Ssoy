import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import s from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />;

  const todolistView = todolist.map((todo) => (
    <li className={s.list} key={todo.id}>
      <input
        className={s.checkbox}
        type="checkbox"
        onChange={() => dispatch(complete(todo.id))}
        checked={todo.complete}
      />
      <div className={s.todolist}>
        {todo.complete ? <del>{todo.text}</del> : <>{todo.text}</>}
      </div>
      <button
        className={s.deleteBtn}
        type="button"
        onClick={() => dispatch(remove(todo.id))}
      >
        {trashIcon}
      </button>
    </li>
  ));

  return (
    <div>
      <ul>{todolistView}</ul>
    </div>
  );
}
