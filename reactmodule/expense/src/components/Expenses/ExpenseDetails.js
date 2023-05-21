import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseList.css';

const ExpenseDetails = (props) =>  {

  function hit(){
    console.log("helo")
  }
  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title} </h2>
      <h2> {props.location}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
      <button onClick={hit}>Delete Expense</button>
  </Card>
    )
}

export default ExpenseDetails