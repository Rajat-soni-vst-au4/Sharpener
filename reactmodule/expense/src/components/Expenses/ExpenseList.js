import React from 'react';

import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import './ExpenseList.css';

const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      <ExpenseDetails
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location = {props.items[0].location}
      />
      <ExpenseDetails
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location = {props.items[1].location}
      />
      <ExpenseDetails
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location = {props.items[2].location}
      />
      <ExpenseDetails
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        location = {props.items[3].location}
      />
    </Card>
  );
}

export default ExpensesList;