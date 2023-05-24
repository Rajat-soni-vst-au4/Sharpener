import React from "react";

import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((key) => (
        
        <ExpenseDetails
        title={key.title}
        amount={key.amount}
        date={key.date}
        location={key.location}
      />
      ))}
     
      
    </Card>
  );
};

export default ExpensesList;
