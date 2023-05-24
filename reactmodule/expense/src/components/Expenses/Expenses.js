import React, {useState} from 'react'
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import "./Expenses.css"



const Expenses=(props) =>{
const [filteredYear,setFilteredYear]=useState("2020");


const filteresChangeHandler=(selectedYear)=>{
  setFilteredYear(selectedYear)
};

const filteredExpenses = props.items.filter((expense) => {
  return expense.date.getFullYear().toString() === filteredYear;
});

  
  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filteresChangeHandler}/>
      <ExpensesList items={filteredExpenses} />
    
    </Card>
  )
}

export default Expenses