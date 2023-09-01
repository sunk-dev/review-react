import React from 'react';
// css 로딩
import './ExpenseItem.css';
// props = property의 약자
//props는 객체-> 디스트럭쳐링 가능 {title,price,date}
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  //객체 형태 {title:'샤인머스캣'}으로 받음.
  // const expenseDate=date; //new Date(2023,8,10);
  // const expenseTitle=title;
  // const expensePrice=propsPrice;//price:propsPrice 별명으로 쓸수 있음.

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

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
