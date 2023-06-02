import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
    isLoggedIn : false,
    onlogin: (email, password, college) => {},
    onlogout: () => {}
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const userInfo = localStorage.getItem("isLoggedIn");
      if (userInfo === "1") {
        setIsLoggedIn(true);
      }
    }, []);
  
    const loginHandler = () => {

        localStorage.setItem("isLoggedIn", "1");
    
        setIsLoggedIn(true);
      };
      const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      };
    return <AuthContext.Provider  value={{
        isLoggedIn: isLoggedIn,
         onlogout: logoutHandler, 
         onlogin: loginHandler,
    }}>{props.children}</AuthContext.Provider>
}
export default AuthContext


  

  