import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseList.css';

const ExpenseDetails = (props) =>  {
  const [amount, setAmount] = useState(props.amount)

  function hit(){
    setAmount("100")
  }
  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title} </h2>
      <h2> {props.location}</h2>
      <div className='expense-item__price'>${amount}</div>
    </div>
      <button onClick={hit}>Change</button>
  </Card>
    )
}

export default ExpenseDetails