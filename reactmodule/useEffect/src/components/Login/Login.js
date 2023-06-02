import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../Store/Auth";

const emailReducer = (state, action) => {
  if(action.type === "user_input"){
    return {value: action.value, isValid: action.value.includes("@")}
  }
  if(action.type === "input_blur"){
    return {value: state.value, isValid: state.value.includes("@")}
  }
  return {value: "", isValid: false}
};

const passwordReducer =(state, action) =>{
  if(action.type === "user_input"){
    return{ value: action.value, isValid: action.value.trim() > 6}
  }
  return {value: "", isValid: false}
}


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("")
  // const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredcollege, setEnteredCollege] = useState("")
  const AuthCtx = useContext(AuthContext)

  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [emailIsValid, setEmailIsValid] = useState();
  const [collegeIsValid, setCollegeIsValid] = useState()

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null});
  const [passwordState, dispatchPassword] = useReducer(passwordReducer,{value: "", isValid: null});

  // useEffect(() => {
  //   const identity = setFormIsValid(
  //     enteredEmail.includes("@") && enteredPassword.trim().length > 6 && enteredcollege.trim().length > 2
  //   );
  
  //   return () => {
  //     clearTimeout(identity)
  //   }
  // }, [enteredEmail, enteredPassword,enteredcollege])
  

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type: "user_input", value: event.target.value});
    setFormIsValid(
      event.target.value.includes("@") && passwordState.isValid 
    )
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type: "user_input", value: event.target.value})
    setFormIsValid(
      emailState.isValid &&  event.target.value.trim().length > 6 
)
  };
  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);
  };


  const validateEmailHandler = () => {
    dispatchEmail({type: "input_blur"})

    // setEmailIsValid(emailState.isValid);
  };
  const validatePasswordHandler = () => {
    dispatchEmail({type: "input_blur"})
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredcollege.trim().length > 2);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    AuthCtx.onlogin(emailState.value, passwordState.value, enteredcollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="college">College Name</label>
          <input
            type="text"
            id="college"
            value={enteredcollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
            required
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
