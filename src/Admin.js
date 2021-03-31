import React, { useState, useEffect } from "react";
import { getUsers } from "./api/api";

import { DataGrid } from "@material-ui/data-grid";

const Admin = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "state", headerName: "Status", width: 130 },
    { field: "password", headerName: "Password", width: 130 },
  ];

  const [users, setUsers] = useState([]);
  const rows = users;
  useEffect(() => {
    const getUsersFromAPI = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    getUsersFromAPI();
  }, []);

  return (
    <div>
      <h1>Admin</h1>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          checkboxSelection
          loading={!users.length}
        />
      </div>
    </div>
  );
};

export default Admin;

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// }
