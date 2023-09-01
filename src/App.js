import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import AppItem from './AppItem'; //APPItem 컴포넌트 불러오기
import NoName from './NoName';
import Hello from './Hello';
/* JSX 규칙
여러개의 태그를 사용하려면 그것들을 하나의 루트로 감싸야 함.
React Fragement 태그
복수의 자식요소를 그룹화 하는데 사용되며 불필요한 노드를 DOM에 추가하지 않음.
 빈 다이아몬드로 하면 리액트 프래그먼트 태그로 인식함.
 리액트에서 닫는 태그가 없는태그들은 (/)슬래시를 치고 닫아준다. */ 

const App=()=>{
  return (
    <>
      <ExpenseItem/>
      <ExpenseItem/>
      <ExpenseItem/>
    </>
  );
};

export default App;
