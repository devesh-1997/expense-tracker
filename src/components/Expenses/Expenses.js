import React, { useState } from 'react';


import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  const [pickedYear, setPickedYear] = useState('2021');
  const filteredList = props.items.filter(expense => expense.date.getFullYear().toString() === pickedYear);

  const handleFilterYear = (year) => {
    setPickedYear(year);
  }

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearFilter={handleFilterYear} currentYear={pickedYear} ></ExpensesFilter>
        <ExpensesList list = {filteredList}/>
      </Card>
    </div>
  );
}

export default Expenses;
