import React, {  useState } from 'react';

function ExpenseForm() {
    const [newtitle, setNewtitle] = useState("")
    const [newamount, setNewamount] = useState("")
    const [newdate, setNewdate] = useState("")

    const titlechangeHandler = (e) =>{
        setNewtitle(e.target.value)
    }
    const amountchangeHandler = (e) =>{
        setNewamount(e.target.value)
    }
   const datechangeHandler = (e) =>{
        setNewdate(e.target.value)
     }
    
     function collenction(e){
       e.preventDefault()
       const collenctionData = {
            title: newtitle,
            amount: newamount,
            date: newdate
       }
        console.log(collenctionData)
     }
  return (
    <>
        <form onSubmit={collenction}>
        <input type="text" placeholder="Expense title" onChange={titlechangeHandler}/>
        <input type="Number"  placeholder="Amount"onChange={amountchangeHandler}/>
        <input type="date"  onChange={datechangeHandler}/>
        <button type='submit' >ADD</button>
        </form>
    </>
  )
}

export default ExpenseForm