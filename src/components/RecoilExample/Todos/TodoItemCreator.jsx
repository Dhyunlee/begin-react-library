import { useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './TodoStore';

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
    inputRef.current.focus();
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
