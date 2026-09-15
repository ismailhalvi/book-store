import React from 'react'
import SideBar from '../../../components/admin/SideBar'
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (
    <div className='d-flex gap-3'>
        <SideBar></SideBar>
        <div className='flex-grow-1'> 
        <Outlet/>

        </div>
    </div>
  )
}

export default AdminLayout