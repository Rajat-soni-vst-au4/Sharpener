import React, { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./Form/NewExpense";

const DummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Delhi",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Delhi",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Delhi",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Delhi",
  },
];

const Header = () => {
  const [expenses, setExpenses] = useState(DummyExpense);

  const addExpenseHandler = (expense) => {
    
    setExpenses([...expenses, expense]);
    console.log("expenss", expenses)
  };

  return (
    <div>
      <h2>Track Your Expenses</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Header;
