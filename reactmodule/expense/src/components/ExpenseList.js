import React from 'react';
import  './ExpenseList.css';

function ExpenseList() {
  const expenseDate = new Date(2021,2,26);
  const expenseTitle = 'car insurance';
  const expenseAmount = 284.99;
  const LocationOfExpenditure = 'Delhi';
  return (
    <div className="expense-item">
     <div>{expenseDate.toISOString()   }   </div>
     
      <div className='expense-item__description'>
      <h2>{LocationOfExpenditure}   </h2>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
  </div>
  )
}

export default ExpenseList