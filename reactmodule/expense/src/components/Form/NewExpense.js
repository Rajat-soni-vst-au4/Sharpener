import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
    //save and trigger data
  const [newtitle, setNewtitle] = useState("");
  const [newamount, setNewamount] = useState("");
  const [newdate, setNewdate] = useState("");
  const [newlocation, setNewlocation]=useState("");
  
  const [isFormCanceled, setIsFormCanceled] = useState(false);

  const titleChangeHandler = (e) => {
    setNewtitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setNewamount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    let d = e.target.value
    // var parts ='2014-04-03'.split('-');
    // var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    // console.log("h", mydate.toDateString());
    // console.log(d)
    setNewdate(d);
    
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
      date: new Date(newdate),
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
 const cancelHandler = () => {
  setNewdate('');
  setNewtitle('');
  setNewamount('');
  setNewlocation('')
  setIsFormCanceled(true);
};

 if (isFormCanceled) {
  return (
    <div>
      <button onClick={() => setIsFormCanceled(false)} className='new-expense__actions'>Add new expense</button>
    </div>
  );
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
            <button type="button" onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
}

export default NewExpense;
