import React from 'react'
import YourProject from '../pages/YourProject'
import { Link } from 'react-router-dom'
import { PlusCircleOutlined, ReadOutlined, TagOutlined } from '@ant-design/icons'

const SideNav = () => {
  return (
    <div className="m-0 w-56 h-full fixed top-0 bg-green-500">
    <div className="flex flex-col justify-center items-center text-slate-200">
       <h1 className="font-bold leading-3  pt-20">
        BOOKSY
       </h1>
       <div className='flex flex-col gap-6 relative top-40'>
        <div className='flex flex-row gap-4'>         
            <Link to="/your-Project"><PlusCircleOutlined size={20}/>Your Projects</Link>
        </div>
        <div className='flex flex-row gap-4'>
           
           <Link to="/saved-books"> <TagOutlined />Saved books</Link>
       </div>
       <div className='flex flex-row gap-4'>
           
           <Link to="/explore-books"><ReadOutlined />Explore books</Link>
       </div>
       </div>
    </div>
    </div>
  )
}

export default SideNav
