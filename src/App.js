import React from "react";
import { RecoilRoot } from 'recoil';
import ShowTodo from './components/ShowTodo'
import MakeTodo from './components/MakeTodo'

function App() {
  return (
    <RecoilRoot>
      <ShowTodo />
      <MakeTodo />
    </RecoilRoot>
  );
}

export default App;
