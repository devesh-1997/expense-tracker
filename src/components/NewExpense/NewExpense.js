import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (expenseObj)=>{
    const expense = {
      ...expenseObj,
      id:Math.random().toString()
    }
    props.onNewExpense(expense);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
