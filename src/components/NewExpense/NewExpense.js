import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props)=>{
  return (
    <div className="new-expense">
      <form>
        <ExpenseForm></ExpenseForm>
      </form>
    </div>
  )
}

export default NewExpense;

