import react,{useState} from "react";
import './ExpenseForm.css';

const Test = (props)=>{
  const [enteredTitle,setEnteredTitle]= useState('')
  const [enteredDate,setEnteredDate]= useState('')
  const [enteredAmount,setEnteredAmount]= useState('')

  const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value)
  }
  const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value)
  }
  const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value)
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('reload prevented')
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    setEnteredDate('');
    setEnteredTitle('');
    setEnteredAmount('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense-control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense-control">
            <label>Date</label>
            <input type="date" value={enteredAmount} min="2021-01-01" max="2023-31-12" onChange={dateChangeHandler} />
          </div>
          <div className="new-expense-control">
            <label>Amount</label>
            <input type="text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
         <button >Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default Test;