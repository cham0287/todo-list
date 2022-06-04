import React, { useState } from 'react';
import styles from './main.module.css';

function Main() {
  const [todos, setTodos] = useState([1, 2, 3, 4]);
  const [addList, setAddList] = useState();
  const onChange = (e) => {
    setAddList(parseInt(e.target.value));
  };
  const onClick = () => {
    const newArray = [...todos, addList];
    console.log(newArray);
    setTodos(newArray);
    setAddList(0);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setAddList('');
  };
  return (
    <div>
      <div className={styles.container}>
        <header className={styles.title}>Todo List</header>
        <div className={styles.inputBox}>
          <form onSubmit={onSubmit}>
            <input type='text' onChange={onChange} value={addList} />
            <button type='submit' onClick={onClick}>
              Add
            </button>
          </form>
        </div>
        <ul>
          {todos.map((a) => (
            <li key={a}>
              {a}
              <span className={styles.listBtn}>
                <button>Edit</button>
                <button>Remove</button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
