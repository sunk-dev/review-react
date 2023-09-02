import React from 'react';
// css 로딩
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
// props = property의 약자
//props는 객체-> 디스트럭쳐링 가능 {title,price,date}
const ExpenseItem = ({ title, price: propsPrice, date }) => {
 
  //1자리 숫자를 2자리 수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  //날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };
  //숫자를 원화 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);

  const clickHandler=e=>{
    console.log(`버튼 클릭!`);
    console.log(e.target);
  }//document.getElementById사용시 태그가 안그려져서 가져올수 없음.
  // onClick={clickHandler} onClick-> props
  // //  버튼 가져오기
  // const $btn=document.getElementById('btn');
  // console.log($btn);
  // $btn.addEventListener('click',clickHandler);
  return (
    <Card className='expense-item'>
  
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button id='btn' onClick={clickHandler}>수정</button>
      <button id='btn' onClick={e=>{console.log(`삭제!`);}}>삭제</button>
    
    </Card>
  );
};

export default ExpenseItem;
