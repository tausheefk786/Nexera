import React, { useState, useEffect } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import { transformImage } from '../../lib/features';
import { dashboardData } from '../../constants/sampleData';
import { Avatar } from '@mui/material';





const columns = [
  {
  field: "id",
  headerName: "ID",
  headerClassName: "table-header",
  width: 200,
},
{
  field: "avatar",
  headerName: "Avatar",
  headerClassName: "table-header",
  width: 150,
  renderCell: (params) => (
    <Avatar alt={params.row.name} src={params.row.avatar} />
  ),
},
{
  field: "name",
  headerName: "Name",
  headerClassName: "table-header",
  width: 300,
},
{
  field: "totalmembers",
  headerName: "Total Members",
  headerClassName: "table-header",
  width: 120,
},
{
  field: "members",
  headerName: "Members",
  headerClassName: "table-header",
  width: 400,
  renderCell: (params) => (
  <AvatarCard max={100} avatar={params.row.members} />
),
},
{
  field: "totalmessages",
  headerName: "Total Messages",
  headerClassName: "table-header",
  width: 120,
},
{
  field: "creater",
  headerName: "Created By",
  headerClassName: "table-header",
  width: 250,
},

];

const ChatManagement = () => {
  const [rows,setRows] = useState([]);
  useEffect(() => {}, []);
  return (
   <AdminLayout>
     <Table  heading={"All Chats"}  columns= {columns} rows={rows} />
   </AdminLayout>
  )
}

export default ChatManagement;