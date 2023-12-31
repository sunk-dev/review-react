import React from 'react';
import './App.css';
import AppItem from './AppItem'; //APPItem 컴포넌트 불러오기
import ExpenseList from './components/Expenses/ExpenseList';
import Hello from './Hello';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';

/* JSX 규칙
여러개의 태그를 사용하려면 그것들을 하나의 루트로 감싸야 함.
React Fragement 태그
복수의 자식요소를 그룹화 하는데 사용되며 불필요한 노드를 DOM에 추가하지 않음.
 빈 다이아몬드로 하면 리액트 프래그먼트 태그로 인식함.
 리액트에서 닫는 태그가 없는태그들은 (/)슬래시를 치고 닫아준다. */
// props <ExpenseItem title="샤인머스캣"/> APP에 의해 ExpenseItem 에 샤인머스캣이 전달됨
//  props는 객체이기 때문에 여러개가 전달 가능함.
// 문자와 다른 데이터는 중괄로로 감싸서 전달하기.
const App = () => {
  //지출 항목에 대한 객체배열->손쉽게 관리 가능
  const expenses = [
    //Date 월 지정시 '설정월 - 1'
    {
      title: '바나나나',
      price: 2000,
      date: new Date(2023, 4 - 1, 23),
    },
    {
      title: '딸기',
      price: 5000,
      date: new Date(2023, 6 - 1, 23),
    },
    {
      title: '오렌지',
      price: 7000,
      date: new Date(2023, 4 - 1, 27),
    },
  ];
  console.log('App실행');
  return (
    <>
    <NewExpense/>
      <ExpenseList items={expenses}></ExpenseList>
      <Card>
      <Hello>
        <ul>
          <li>사과</li>
          <li>포도</li>
          <li>복숭아</li>
        </ul>
      </Hello>
      </Card>
    </>
  );
};

export default App;
