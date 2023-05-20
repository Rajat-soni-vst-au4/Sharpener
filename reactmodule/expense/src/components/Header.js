import React from 'react'
import ExpenseList from './ExpenseList'

function Header() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure: 'Delhi',
    },
    { id: 'e2', title: 'New TV', amount: 799.49,  LocationOfExpenditure: 'Delhi', date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure: 'Delhi',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      LocationOfExpenditure: 'Delhi',
      date: new Date(2021, 5, 12),
    },
  ];
 
  return (
   
    <>
        <h1>Expense Items</h1>
        <ExpenseList
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseList>
      <ExpenseList
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseList>
      <ExpenseList
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseList>
      <ExpenseList
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseList>
    </>
  )
}

export default Header