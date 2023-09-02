import React from 'react'
import './ExpenseDate.css';//css import 할때 확장자 붙이기


const ExpenseDate = ({date}) => {
    //Date객체 월이 0부터 시작됨

    const year=date.getFullYear();
    const month=date.toLocaleString('en-US',{month:'long'});//국가별로 날짜 포맷 
    const day=date.getDate();

    return (
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
      );
};

export default ExpenseDate