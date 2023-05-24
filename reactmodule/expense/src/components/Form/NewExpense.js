import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
    //save and trigger data
  const [newtitle, setNewtitle] = useState("");
  const [newamount, setNewamount] = useState("");
  const [newdate, setNewdate] = useState("");
  const [newlocation, setNewlocation]=useState("");
  

  const titleChangeHandler = (e) => {
    setNewtitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setNewamount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setNewdate(e.target.value);
  };
  const locationChangeHandler=(event)=>{
    setNewlocation(event.target.value);
}

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
      <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input 
                type='text' 
                value={newtitle} 
                onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Location</label>
                <input 
                type='text' 
                value={newlocation} 
                onChange={locationChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                type='number'
                min="0.01" 
                step="0.01" 
                value={newamount}
                onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                type='date' 
                min="2018-01-01" 
                max="2023-12-31" 
                value={newdate}
                onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="button" >Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default NewExpense;
