import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { TODO_LIST } from '../Atom'

function ShowTodo() {
  
  const todos = useRecoilValue(TODO_LIST);

  const setTodos = useSetRecoilState(TODO_LIST);

  const deleteTodo = (e) => {
    const newTodos = todos.filter((data, index)=> index !== parseInt(e.target.id));
    setTodos(newTodos)
  }

  const UpdateTodo = (e) => {
    // 모달 창에서 새로운 할 일 입력 가능
    const newTodo = prompt("새로운 할 일을 입력해주세요.")
    const newTodos = todos.map((data, index) => {
      if(index === parseInt(e.target.id)){
        return newTodo;
      } else return data;
    })
    setTodos(newTodos)
  }

  return (
    <div style={{ marginLeft:'20px'}}>
      <h2>TodoList</h2>
      {todos.map((data, index) => (
        <div>
          <p>{data}</p>
          <button id={index} onClick={deleteTodo}>X</button>
          <button id={index} onClick={UpdateTodo}>수정</button>
        </div> 
      ))}
    </div>
  )
}

export default ShowTodo;