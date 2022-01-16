import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false)

  const saveExpenseDataHandler = (expenseObj) => {
    const expense = {
      ...expenseObj,
      id: Math.random().toString()
    }
    props.onNewExpense(expense);
    toggleExpenseForm();
  }
  const toggleExpenseForm = () => {
    setShowForm((prevFormVisibility) =>
      !prevFormVisibility
    );
  }
  return (
    <div className='new-expense'>
      {
        showForm ?
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {toggleExpenseForm} />
          :
          <button onClick={toggleExpenseForm}> Add new Expense</button>
      }
    </div>
  );
};

export default NewExpense;
