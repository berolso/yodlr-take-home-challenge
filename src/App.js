// dependencies
import React, { useState,useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from 'jsonwebtoken'

// modules
import NavBar from "./NavBar";
import Routes from "./Routes";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import { getUser } from "./api/api";

function App() {
  const [currentuser, setCurrentuser] = useState(null);
  const [token, setToken] = useLocalStorage("userToken");

  useEffect(()=>{
    const getUserFromAPI = async () =>{
      if(token){
        try{
          const {username} = jwt.decode(token)
          const curUser = await getUser(username)
          setCurrentuser(curUser)
        } catch (err){
          setCurrentuser(null)
        }
      }
    }
    getUserFromAPI()
  },[token])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes setToken={setToken}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
