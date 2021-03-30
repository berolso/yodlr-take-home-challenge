import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "./api/api";


const User = () => {
  const [user, setUser] = useState({})
  const { id } = useParams();

  useEffect(() =>{
    const getUserFromAPI = async () =>{
      const user = await getUser(id)
      console.log(user);
      setUser(user)
    }
    getUserFromAPI()
  },[id])
  return (
    <div>
      {user && Object.values(user)}
    </div>
  );
};

export default User;
