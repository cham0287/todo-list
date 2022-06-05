import React, { useState } from 'react';
import styles from './main.module.css';
import { FaTrashAlt } from 'react-icons/fa';

function Main() {
  const [todos, setTodos] = useState(['일어나기', '씻기', '밥먹기']);
  const [addList, setAddList] = useState();
  const onChange = (e) => {
    setAddList(e.target.value);
  };
  const onAdd = () => {
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

        <ul>
          <div className={styles.inputBox}>
            <form onSubmit={onSubmit}>
              <input
                type='text'
                onChange={onChange}
                value={addList}
                style={{ width: '90%' }}
                placeholder='할일을 입력하세요'
              />
              <button type='submit' onClick={onAdd} style={{ width: '10%' }}>
                <i class='fa-solid fa-plus'></i>
              </button>
            </form>
          </div>
          {todos.map((a, index) => (
            <li key={a}>
              <div className={styles.todo}>
                {a}
                <span className={styles.listBtn}>
                  <button
                    className={styles.todoBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      const newArray = [...todos];
                      newArray.splice(index, 1);
                      setTodos(newArray);
                      console.log(index);
                    }}
                    index={index}
                  >
                    <FaTrashAlt />
                  </button>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
