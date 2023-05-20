import React from 'react';
import  './ExpenseList.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';


function ExpenseList(props) {
  return (
    <div className='expense-item'>
          <ExpenseDate date={props.date} />
          <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
    </div>
    
  )
}

export default ExpenseList