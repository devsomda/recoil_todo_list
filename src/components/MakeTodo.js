import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { TODO_LIST } from '../Atom'

function MakeTodo() {

  // Recoil에 저장
  const Items = useRecoilValue(TODO_LIST);

  const setTodo = useSetRecoilState(TODO_LIST);

  const [input, setInput] = useState('');

  const AddTodo = (e) => {
    e.preventDefault();
    setTodo([...Items, input]);
    setInput('');
  }

  const inputHandler = (e) =>{
    setInput(e.target.value)
  }

  return (
    <div style={{ marginLeft:'20px', marginTop:'30px'}}>
      <h3>Todo를 만들어보세요</h3>
      <form action="submit" onSubmit={AddTodo}>
        <input type="text" value={input} onChange={inputHandler} placeholder="할 일을 입력해주세요"/>
        <button onClick={AddTodo}>입력</button>
      </form>
    </div>
  )
}

export default MakeTodo