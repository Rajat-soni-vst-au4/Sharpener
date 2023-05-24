import React, { useState } from "react";

function NewExpense(props) {
    //save and trigger data
  const [newtitle, setNewtitle] = useState("");
  const [newamount, setNewamount] = useState("");
  const [newdate, setNewdate] = useState("");

  const titlechangeHandler = (e) => {
    setNewtitle(e.target.value);
  };
  const amountchangeHandler = (e) => {
    setNewamount(e.target.value);
  };
  const datechangeHandler = (e) => {
    setNewdate(e.target.value);
  };

  //save data in a object collenctionData
  function collenction(e) {
    e.preventDefault();
    const collenctionData = {
      title: newtitle,
      amount: newamount,
      date: newdate,
    };
    //invoke save data fn
    saveData(collenctionData);
    setNewtitle("");
    setNewamount("");
    setNewdate("");
  }
  //fn making a set with collenctionData + random id
  function saveData(collenctionData){
    const expenseData= {
        ...collenctionData,
        id: Math.random().toString()
    };
    // passing this expenseData to onAddExpense prop which is coming from header
    props.onAddExpense(expenseData)
   
 }
  return (
    <>
      <form onSubmit={collenction}>
        <input
          type="text"
          value={newtitle}
          placeholder="Expense title"
          onChange={titlechangeHandler}
        />
        <input
          type="Number"
          value={newamount}
          placeholder="Amount"
          onChange={amountchangeHandler}
        />
        <input 
        type="date"
        value={newdate}
        onChange={datechangeHandler}
        />
        <button type="submit">ADD</button>
      </form>
    </>
  );
}

export default NewExpense;
