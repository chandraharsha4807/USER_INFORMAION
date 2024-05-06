import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./UserDashboard.css";
import { userServices } from "../services/userServices";

export const UsersDashboard = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      field: "id",
      headerName: "User Id",
      width: 250,
      editable: false,
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email Id",
      width: 250,
      editable: false,
    },
    {
      field: "userName",
      headerName: "Username",
      width: 250,
      editable: false,
    },
    {
      field: "password",
      headerName: "Password",
      sortable: false,
      editable: false,
      width: 200,
      disableColumnMenu: true,
      valueGetter: (value, row) =>
        '************',
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 100,
      editable: false,
    },
  ];
  const getRows = async () => {
    setRows([]);
    setLoading(true);
    const { data } = await userServices.getUsers();
    setRows(data.getUsers);
    setLoading(false);
  };

  useEffect(() => {
    getRows();
  }, []);

  return (
    <div>
      Users Dashboard
      <div className="table-container">
        <DataGrid
          rows={rows}
          autoHeight
          autoWidth
          loading={loading}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          hideFilterPanel={true}
          columnHeaderHeight={40}
          rowHeight={40}
          pageSizeOptions={[5, 10, 20, 30, 50, 100]}
        />
      </div>
    </div>
  );
};
