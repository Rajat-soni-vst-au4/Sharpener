import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart"
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteresChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteresChangeHandler}
      />
       <ExpensesChart expenses={filteredExpenses}/>
      {filteredExpenses.length===1 && <h2 className='expenses-list__fallback'>Only single Expense here Please add more...</h2>} 
     
         
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
