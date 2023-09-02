import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {

  let [userInput,setUserInput]=useState({
    title:'',
    price:'',
    date:''
  });
  //setter 로 객체 수정시 새로운 객체를 넣어야함
  // 기존객체를 유지하고 싶으면 ...예전객체명 을 해서 복사한후 일부만 수정가능
  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      title:e.target.value
    });//객체가 들어오지 않으면 에러남
    console.log(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput, //기존의 UserInput복사
      price:e.target.value//price 값만 변경
    })
    console.log(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date:e.target.value
    })
    console.log(e.target.value);
  };

  const formSubmithandler=e=>{
    e.preventDefault();
    console.log(`submit 버튼 누름`);

    console.log(userInput);
    /* 
    입력창 리셋 아래 방식으로 불가
    일반변수는 랜더링반영 불가 => useState(상태변수 사용하기)!
    title='';
    price='';
    date='';*/
    // 입력창 리셋
    setUserInput({
      title:'',
      price:'',
      date:''
    })
   

  }
  return (
    <form onSubmit={formSubmithandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
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
