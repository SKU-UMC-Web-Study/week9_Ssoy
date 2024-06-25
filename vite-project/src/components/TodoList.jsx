import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import s from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  //useSelector를 통해 상태를 선택함
  const dispatch = useDispatch();
  //컴포넌트가 액션을 보낼 수 있도록 useDispatch 사용

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
