import React, { useState, useEffect } from "react";
import { getUsers } from "./api/api";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsersFromAPI = async () => {
      const users = await getUsers();
      console.log("users", users);
      setUsers(users);
    };
    getUsersFromAPI();
  }, []);
  
  return (
    <div>
      <h1>Admin</h1>
      {users.length ? (
        <ul>
          <li>{users[0] && Object.keys(users[0]).join(" --- ")}</li>
          {users.map((user) => (
            <li>{Object.values(user).join(" -- ")}</li>
          ))}
        </ul>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Admin;
