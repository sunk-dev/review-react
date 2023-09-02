import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {

  let [title,setTitle]=useState('');
  let [price,setPrice]=useState('');
  let [date,setDate]=useState('');
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const formSubmithandler=e=>{
    e.preventDefault();
    console.log(`submit 버튼 누름`);
    const newExpense={
      title,
      price,
      date
    };
    console.log(newExpense);
    /* 
    입력창 리셋 아래 방식으로 불가
    일반변수는 랜더링반영 불가 => useState(상태변수 사용하기)!
    title='';
    price='';
    date='';*/
    // 입력창 리셋
    setTitle('');
    setPrice('');
    setDate('');

  }
  return (
    <form onSubmit={formSubmithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
