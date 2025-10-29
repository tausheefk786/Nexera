import React, { useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'



const columns = [
  {
  field: "id",
  headerName: "ID",
  headerClassName: "table-header",
  width: 200,
},
 {
  field: "avatar",
  headerName: "AVATAR",
  headerClassName: "table-header",
  width: 150,
},

];

const UserManagement = () => {
  const [rows,setrows] = useState([]);
  return (
   <AdminLayout>
     <Table  heading={"All Users"}  columns= {columns} rows={rows} />
   </AdminLayout>
  )
}

export default UserManagement